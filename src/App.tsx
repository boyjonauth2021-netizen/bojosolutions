import { useMemo, useState } from 'react'
import logo from './assets/logo.png'
import { kindLabel, previewFocus, projects, type Kind, type Project } from './projects'

const filters: Array<{ id: 'all' | Kind; label: string }> = [
  { id: 'all', label: 'All' },
  { id: 'game', label: 'Games' },
  { id: 'webapp', label: 'Web apps' },
  { id: 'website', label: 'Websites' },
]

const capabilities = [
  'Web platforms',
  'EdTech',
  'Browser and mobile games',
  'School management systems',
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
              Bojo Solutions designs and ships web platforms, education
              technology and browser games from Mauritius.
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
          <div className="about-lead">
            <p className="kicker">Founder</p>
            <h2>Kevin Boyjonauth</h2>
            <p className="role">Founder & Lead Engineer, Bojo Solutions</p>
            <p>
              Bojo Solutions designs and ships web platforms, education
              technology and browser games from Mauritius.
            </p>
            <p>
              Twenty years in Cambridge Computer Science — IGCSE and O Level
              2210, A Level 9618 — shapes the education products we ship.
              Leading Computer Science and the Computer Lab at a state
              secondary school is the domain behind that work.
            </p>
            <h3>What we build</h3>
            <ul className="capabilities">
              {capabilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <ul className="credibility">
            <li>
              <strong>20+</strong>
              <span>Years in Computer Science</span>
            </li>
            <li>
              <strong>{counts.all}</strong>
              <span>Shipped products</span>
            </li>
            <li>
              <strong>
                <a href="https://bojo2025.github.io/ALevelSolved/">
                  ALevelSolved.com
                </a>
              </strong>
              <span>Flagship exam-solutions platform</span>
            </li>
            <li>
              <strong>In daily use</strong>
              <span>
                School systems for marks, timetabling, invigilation and
                replacements
              </span>
            </li>
          </ul>
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
