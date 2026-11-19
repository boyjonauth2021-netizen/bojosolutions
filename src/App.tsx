import { useMemo, useState } from 'react'
import logo from './assets/logo.png'
import { kindLabel, previewFocus, projects, type Kind, type Project } from './projects'

const filters: Array<{ id: 'all' | Kind; label: string }> = [
  { id: 'all', label: 'All' },
  { id: 'game', label: 'Games' },
  { id: 'webapp', label: 'Web apps' },
  { id: 'website', label: 'Websites' },
]

export default function App() {
  const [kind, setKind] = useState<'all' | Kind>('all')
  const [query, setQuery] = useState('')

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase()
    return projects
      .filter((project) => kind === 'all' || project.kind === kind)
      .filter((project) => {
        if (!q) return true
        return (
          project.name.toLowerCase().includes(q) ||
          project.summary.toLowerCase().includes(q) ||
          kindLabel[project.kind].toLowerCase().includes(q)
        )
      })
  }, [kind, query])

  const counts = {
    all: projects.length,
    game: projects.filter((project) => project.kind === 'game').length,
    webapp: projects.filter((project) => project.kind === 'webapp').length,
    website: projects.filter((project) => project.kind === 'website').length,
  }

  return (
    <>
      <header className="bar">
        <a className="brand" href="#top">
          <img src={logo} alt="" width="36" height="36" />
          <span>Bojo Solutions</span>
        </a>
        <nav>
          <a href="#work">Work</a>
          <a href="#about">About</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div>
            <p className="kicker">Mauritius · Boyjonauth Kevin</p>
            <h1>Finished games, apps and sites from the last few months.</h1>
            <p className="lede">
              Bojo Solutions is the public shelf for work that is already
              playable or already in use: school tools, island software, and
              games that run in the browser.
            </p>
          </div>
          <div className="mark" aria-hidden="true">
            <img src={logo} alt="" width="96" height="96" />
          </div>
        </section>

        <dl className="stats">
          <div>
            <dt>Finished</dt>
            <dd>{counts.all}</dd>
          </div>
          <div>
            <dt>Games</dt>
            <dd>{counts.game}</dd>
          </div>
          <div>
            <dt>Web apps</dt>
            <dd>{counts.webapp}</dd>
          </div>
          <div>
            <dt>Websites</dt>
            <dd>{counts.website}</dd>
          </div>
        </dl>

        <section id="work" className="work">
          <div className="toolbar">
            <div className="filters" role="tablist" aria-label="Kind of work">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  type="button"
                  role="tab"
                  aria-selected={kind === filter.id}
                  className={kind === filter.id ? 'on' : ''}
                  onClick={() => setKind(filter.id)}
                >
                  {filter.label}
                  <span>{counts[filter.id]}</span>
                </button>
              ))}
            </div>
            <label className="search">
              <span className="sr">Search the shelf</span>
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search by name or subject"
                type="search"
              />
            </label>
          </div>

          {visible.length === 0 ? (
            <p className="empty">
              Nothing on the shelf matches that. Clear the search or pick
              another kind.
            </p>
          ) : (
            <ul className="grid">
              {visible.map((project) => (
                <li key={project.id} className={`card kind-${project.kind}`}>
                  <Preview project={project} />
                  <div className="card-body">
                    <div className="card-top">
                      <time dateTime={project.sort}>{project.when}</time>
                    </div>
                    <h2>{project.name}</h2>
                    <p>{project.summary}</p>
                    {project.note ? <p className="note">{project.note}</p> : null}
                    <div className="links">
                      {project.live ? (
                        <a href={project.live} target="_blank" rel="noreferrer">
                          Open
                        </a>
                      ) : null}
                      <a
                        className="quiet"
                        href={project.source}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Source
                      </a>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </section>

        <section id="about" className="about">
          <h2>How this shelf was built</h2>
          <p>
            Each card is a project that already has a public site, or a
            finished repository that can be run from source. Drafts, empty
            repositories and earlier cuts of the same idea stay off the shelf.
            BojoFlix stands in for the earlier CineList and FlixBojo versions.
          </p>
          <p>
            The mark is the studio logo from the Games MRU work. The shelf
            is published on GitHub Pages. A custom domain can be attached
            later, once it is registered.
          </p>
          <p>
            <a href="mailto:boyjonauth2022@gmail.com">boyjonauth2022@gmail.com</a>
          </p>
        </section>
      </main>

      <footer>
        <div className="foot">
          <img src={logo} alt="" width="36" height="36" />
          <div>
            <strong>Bojo Solutions</strong>
            <span>Mauritius · Boyjonauth Kevin</span>
          </div>
        </div>
        <a href="mailto:boyjonauth2022@gmail.com">boyjonauth2022@gmail.com</a>
      </footer>
    </>
  )
}

function Preview({ project }: { project: Project }) {
  const [failed, setFailed] = useState(false)
  const focus = previewFocus[project.id] ?? 'top'
  const src = `${import.meta.env.BASE_URL}previews/${project.id}.webp`

  const frame = failed ? (
    <div className={`shot fallback kind-${project.kind}`}>
      <span>{project.name}</span>
    </div>
  ) : (
    <img
      className={`shot focus-${focus}`}
      src={src}
      alt=""
      width={1280}
      height={800}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
    />
  )

  return (
    <div className="frame">
      {project.live ? (
        <a href={project.live} target="_blank" rel="noreferrer" aria-label={`Open ${project.name}`}>
          {frame}
        </a>
      ) : (
        frame
      )}
      <span className="badge">{kindLabel[project.kind]}</span>
    </div>
  )
}
