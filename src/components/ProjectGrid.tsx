import type { Project } from '../projects'
import { ProjectCard } from './ProjectCard'

export function ProjectGrid({
  projects,
  empty,
}: {
  projects: Project[]
  empty: string
}) {
  if (projects.length === 0) {
    return <p className="empty">{empty}</p>
  }

  return (
    <ul className="grid">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </ul>
  )
}
