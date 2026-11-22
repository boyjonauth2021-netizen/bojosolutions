import { kindLabel, projects, type Kind, type Project } from './projects'

export const kindOrder: Kind[] = ['website', 'webapp', 'game']

export const kindMeta: Record<
  Kind,
  { path: string; title: string; nav: string; blurb: string }
> = {
  website: {
    path: '/websites',
    title: 'Websites',
    nav: 'Websites',
    blurb:
      'Public sites and desks — school pages, cinema, and collection trackers shipped for the open web.',
  },
  webapp: {
    path: '/apps',
    title: 'Apps',
    nav: 'Apps',
    blurb:
      'Tools in daily use — mark entry, replacements, rentals, tuition, and education products.',
  },
  game: {
    path: '/games',
    title: 'Games',
    nav: 'Games',
    blurb:
      'Browser and itch.io games from Mauritius — runners, platformers, and painted action stories.',
  },
}

export function listedProjects(): Project[] {
  return projects.filter((project) => !project.hidden)
}

export function projectsByKind(kind: Kind): Project[] {
  return listedProjects()
    .filter((project) => project.kind === kind)
    .sort((a, b) => b.sort.localeCompare(a.sort))
}

export function counts() {
  const listed = listedProjects()
  return {
    all: listed.length,
    website: listed.filter((project) => project.kind === 'website').length,
    webapp: listed.filter((project) => project.kind === 'webapp').length,
    game: listed.filter((project) => project.kind === 'game').length,
  }
}

export function labelFor(kind: Kind) {
  return kindLabel[kind]
}
