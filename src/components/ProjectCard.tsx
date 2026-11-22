import { useState } from 'react'
import { kindLabel, previewFocus, type Project } from '../projects'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <li className={`card kind-${project.kind}`}>
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
          {project.source ? (
            <a
              className="quiet"
              href={project.source}
              target="_blank"
              rel="noreferrer"
            >
              Source
            </a>
          ) : null}
        </div>
      </div>
    </li>
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
