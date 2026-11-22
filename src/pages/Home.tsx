import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import { counts, kindMeta, kindOrder, projectsByKind } from '../catalog'
import { previewFocus } from '../projects'

export function Home() {
  const tally = counts()

  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <p className="lede">
            Bojo Solutions designs and ships web platforms, education technology
            and browser games from Mauritius.
          </p>
          <div className="cta">
            <Link className="primary" to="/websites">
              Browse websites
            </Link>
            <Link className="ghost" to="/contact">
              Contact Kevin
            </Link>
          </div>
        </div>
        <div className="mark">
          <img src={logo} alt="Bojo Solutions mark" width="120" height="120" />
        </div>
      </section>

      <dl className="stats">
        <div>
          <dt>Websites</dt>
          <dd>{tally.website}</dd>
        </div>
        <div>
          <dt>Apps</dt>
          <dd>{tally.webapp}</dd>
        </div>
        <div>
          <dt>Games</dt>
          <dd>{tally.game}</dd>
        </div>
        <div>
          <dt>Finished</dt>
          <dd>{tally.all}</dd>
        </div>
      </dl>

      <section className="hubs" aria-label="Work by kind">
        {kindOrder.map((kind) => {
          const meta = kindMeta[kind]
          const items = projectsByKind(kind)
          const previews = items.slice(0, 3)

          return (
            <article key={kind} className={`hub kind-${kind}`}>
              <div className="hub-copy">
                <p className="kicker">{meta.title}</p>
                <h2>{meta.title}</h2>
                <p>{meta.blurb}</p>
                <p className="hub-count">
                  {items.length} {items.length === 1 ? 'project' : 'projects'}
                </p>
                <Link className="primary" to={meta.path}>
                  Open {meta.nav.toLowerCase()}
                </Link>
              </div>
              <div className="hub-mosaic" aria-hidden="true">
                {previews.map((project) => {
                  const focus = previewFocus[project.id] ?? 'top'
                  return (
                    <img
                      key={project.id}
                      className={`shot focus-${focus}`}
                      src={`${import.meta.env.BASE_URL}previews/${project.id}.webp`}
                      alt=""
                      width={640}
                      height={400}
                      decoding="async"
                    />
                  )
                })}
              </div>
            </article>
          )
        })}
      </section>
    </>
  )
}
