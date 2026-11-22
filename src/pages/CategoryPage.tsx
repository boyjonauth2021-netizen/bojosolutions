import { useMemo, useState } from 'react'
import { kindMeta, projectsByKind } from '../catalog'
import { ProjectGrid } from '../components/ProjectGrid'
import type { Kind } from '../projects'

export function CategoryPage({ kind }: { kind: Kind }) {
  const [query, setQuery] = useState('')
  const meta = kindMeta[kind]
  const all = projectsByKind(kind)

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return all
    return all.filter(
      (project) =>
        project.name.toLowerCase().includes(q) ||
        project.summary.toLowerCase().includes(q) ||
        (project.note ?? '').toLowerCase().includes(q),
    )
  }, [all, query])

  return (
    <section className="catalog-page">
      <div className="page-head">
        <p className="kicker">Catalogue</p>
        <h1>{meta.title}</h1>
        <p className="lede">{meta.blurb}</p>
        <p className="page-count">
          {all.length} {all.length === 1 ? 'project' : 'projects'}
        </p>
      </div>

      <div className="toolbar">
        <label className="search">
          <span className="sr">Search {meta.title.toLowerCase()}</span>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={`Search ${meta.title.toLowerCase()}`}
            type="search"
          />
        </label>
      </div>

      <ProjectGrid
        projects={visible}
        empty={`Nothing in ${meta.title.toLowerCase()} matches that search.`}
      />
    </section>
  )
}
