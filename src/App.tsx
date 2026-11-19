import { useMemo, useState } from 'react'
import logo from './assets/logo.png'
import { kindLabel, previewFocus, projects, type Kind, type Project } from './projects'

const filters: Array<{ id: 'all' | Kind; label: string }> = [
  { id: 'all', label: 'All' },
  { id: 'game', label: 'Games' },
  { id: 'webapp', label: 'Web apps' },
  { id: 'website', label: 'Websites' },
]

const schoolSystems = [
  'School website',
  'Marks entry',
  'Timetable pipeline',
  'Mock exam lists',
  'Invigilation scheme',
  'Teacher replacement',
  'Student profiles',
]

export default function App() {
  const [kind, setKind] = useState<'all' | Kind>('all')
  const [query, setQuery] = useState('')

  const listed = useMemo(() => projects.filter((project) => !project.hidden), [])

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase()
    return listed
      .filter((project) => kind === 'all' || project.kind === kind)
      .filter((project) => {
        if (!q) return true
        return (
          project.name.toLowerCase().includes(q) ||
          project.summary.toLowerCase().includes(q) ||
          kindLabel[project.kind].toLowerCase().includes(q)
        )
      })
  }, [kind, listed, query])

  const counts = {
    all: listed.length,
    game: listed.filter((project) => project.kind === 'game').length,
    webapp: listed.filter((project) => project.kind === 'webapp').length,
    website: listed.filter((project) => project.kind === 'website').length,
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
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <p className="kicker">Dark tech studio · Mauritius</p>
            <h1>Software with a finish line.</h1>
            <p className="lede">
              Bojo Solutions builds games, school systems, and public tools
              that are already in use. Mauritian-made, from a computer science
              teacher who now ships full time.
            </p>
            <div className="cta">
              <a className="primary" href="#work">
                See the work
              </a>
              <a className="ghost" href="#contact">
                Contact Kevin
              </a>
            </div>
          </div>
          <div className="mark">
            <img src={logo} alt="Bojo Solutions mark" width="120" height="120" />
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
          <div className="section-head">
            <p className="kicker">Selected work</p>
            <h2>On the shelf</h2>
          </div>
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
                      <span className="kind">{kindLabel[project.kind]}</span>
                      <time dateTime={project.sort}>{project.when}</time>
                    </div>
                    <h3>{project.name}</h3>
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
          <div>
            <p className="kicker">Founder</p>
            <h2>Kevin Boyjonauth</h2>
            <p className="lede">
              Founder of Bojo Solutions, based in the north of Mauritius. He
              studied at Bangalore University from 2000 to 2003 and always
              wanted to be a programmer. For more than twenty years he taught
              Cambridge IGCSE and O Level Computer Science (2210) and A Level
              Computer Science (9618). He is the Computer Science teacher and
              Computer Lab manager at Shri B. Ramlallah SSS, Mapou. Since 2026
              he has been a full-time developer, building with AI-assisted
              tools.
            </p>
          </div>
          <div className="facts">
            <article>
              <h3>At the school</h3>
              <p>
                He built the school’s own systems, the ones the staff actually
                run the day on.
              </p>
              <ul>
                {schoolSystems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article>
              <h3>Flagship</h3>
              <p>
                <a href="https://bojo2025.github.io/ALevelSolved/">
                  ALevelSolved.com
                </a>{' '}
                holds solved past papers for Cambridge, Edexcel, and the IB.
              </p>
            </article>
          </div>
        </section>

        <section id="contact" className="contact">
          <div>
            <p className="kicker">Contact</p>
            <h2>Start with an email.</h2>
            <p>
              New work, a school system, or a question about something already
              on the shelf.
            </p>
          </div>
          <div className="contact-links">
            <a className="primary" href="mailto:boyjonauth2022@gmail.com">
              boyjonauth2022@gmail.com
            </a>
            <a href="https://github.com/Bojo2025" target="_blank" rel="noreferrer">
              GitHub · Bojo2025
            </a>
            <a
              href="https://github.com/boyjonauth2021-netizen"
              target="_blank"
              rel="noreferrer"
            >
              GitHub · boyjonauth2021-netizen
            </a>
          </div>
        </section>
      </main>

      <footer>
        <div className="foot">
          <img src={logo} alt="" width="32" height="32" />
          <div>
            <strong>Bojo Solutions</strong>
            <span>North of Mauritius</span>
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
    <div className="shot fallback">
      <span>{project.name}</span>
    </div>
  ) : (
    <img
      className={`shot focus-${focus}`}
      src={src}
      alt=""
      width={1280}
      height={800}
      decoding="async"
      onError={() => setFailed(true)}
    />
  )

  return (
    <div className="frame">
      {project.live ? (
        <a
          href={project.live}
          target="_blank"
          rel="noreferrer"
          aria-label={`Open ${project.name}`}
        >
          {frame}
        </a>
      ) : (
        frame
      )}
      <span className="badge">{kindLabel[project.kind]}</span>
    </div>
  )
}
