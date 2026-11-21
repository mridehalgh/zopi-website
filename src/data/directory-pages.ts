import { directoryEditorial, type DirectoryEditorial } from './directory-editorial.ts';
import { integrations, type Integration } from './integrations.ts';
import { partners, type Partner } from './partners.ts';

export type DirectoryKind = 'partners' | 'integrations';

export const directoryLabels = { partners: 'Trading partners', integrations: 'Integrations' } as const;

// Record the original slug here when an already-published entity changes name.
const slugOverrides: Record<DirectoryKind, Record<string, string>> = { partners: {}, integrations: {} };

export function directorySlug(kind: DirectoryKind, name: string) {
  const overrides = slugOverrides[kind];
  return Object.hasOwn(overrides, name) ? overrides[name] : name.normalize('NFKD')
    .replace(/\p{Diacritic}/gu, '').toLowerCase().replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

export function directoryPath(kind: DirectoryKind, name: string) {
  return `/${kind}/${directorySlug(kind, name)}/`;
}

export function assessmentPath(name: string) {
  return `/contact?intent=connection&connection=${encodeURIComponent(name)}`;
}

type DirectoryPageFields = { slug: string; path: string; editorial?: DirectoryEditorial };
export type DirectoryPage = DirectoryPageFields & (
  { kind: 'partners'; entity: Partner } | { kind: 'integrations'; entity: Integration }
);

function decorate<T extends Partner | Integration>(kind: DirectoryKind, entities: readonly T[]) {
  const edits: Record<string, DirectoryEditorial> = directoryEditorial[kind];
  const slugs = new Set<string>();
  const pages = entities.map((entity) => {
    const slug = directorySlug(kind, entity.name);
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug) || slugs.has(slug)) {
      throw new Error(`Invalid or duplicate directory slug: ${kind}/${slug} (${entity.name})`);
    }
    slugs.add(slug);
    return { entity, slug, path: directoryPath(kind, entity.name), editorial: edits[slug] };
  });
  for (const [slug, edit] of Object.entries(edits)) {
    if (!slugs.has(slug)) throw new Error(`Editorial content has no matching catalogue record: ${kind}/${slug}`);
    if (edit.status !== 'reviewed') continue;
    const date = new Date(edit.reviewedOn);
    const validDate = /^\d{4}-\d{2}-\d{2}$/.test(edit.reviewedOn)
      && !Number.isNaN(date.valueOf()) && date.toISOString().slice(0, 10) === edit.reviewedOn;
    if (![edit.description, edit.summary].every(text => text.trim()) || !validDate
      || edit.guidance.length === 0 || edit.checks.length < 2
      || edit.checks.some(check => !check.trim()) || new Set(edit.checks.map(check => check.trim())).size !== edit.checks.length) {
      throw new Error(`Incomplete reviewed content: ${kind}/${slug}`);
    }
    for (const item of edit.guidance) {
      const source = new URL(item.source.url);
      if (source.protocol !== 'https:' || source.username || source.password
        || ![item.title, item.fact, item.source.label].every(text => text.trim())) {
        throw new Error(`Invalid reviewed source: ${kind}/${slug}`);
      }
    }
  }
  return pages;
}

export const directoryPages = {
  partners: decorate('partners', partners).map(page => ({ ...page, kind: 'partners' as const })),
  integrations: decorate('integrations', integrations).map(page => ({ ...page, kind: 'integrations' as const })),
};

export function relatedDirectoryPages(page: DirectoryPage) {
  return directoryPages[page.kind]
    .filter(candidate => candidate.slug !== page.slug && candidate.entity.category === page.entity.category)
    .sort((a, b) => Number(b.editorial?.status === 'reviewed') - Number(a.editorial?.status === 'reviewed'))
    .slice(0, 3);
}
