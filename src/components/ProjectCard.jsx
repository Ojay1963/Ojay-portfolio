import Button from './Button.jsx'
import Tag from './Tag.jsx'

import { useState } from 'react'

function ProjectCard({ project }) {
  const [imageFailed, setImageFailed] = useState(false)
  const codeLabel = project.githubLabel || 'View Code'

  return (
    <article className="project-card glass fade-in">
      {project.imageSrc && !imageFailed ? (
        <img
          className="project-thumb project-thumb-image"
          src={project.imageSrc}
          alt={project.imageAlt || project.title}
          loading="lazy"
          referrerPolicy="no-referrer"
          onError={() => setImageFailed(true)}
        />
      ) : (
        <div className="project-thumb project-thumb-fallback" style={{ backgroundImage: project.image }}>
          <span>{project.title}</span>
        </div>
      )}
      <h3 className="project-title">{project.title}</h3>
      {(project.role || project.timeline) && (
        <p className="project-meta">
          {[project.role, project.timeline].filter(Boolean).join(' | ')}
        </p>
      )}
      <div className="project-tags">
        {project.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
      <p className="project-desc">{project.description}</p>
      <p className="project-problem">{project.problem}</p>
      {project.outcome && <p className="project-outcome">{project.outcome}</p>}
      <ul className="project-highlights">
        {project.highlights.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      {(project.demo || project.github) && (
        <div className="project-actions">
          {project.demo && (
            <Button href={project.demo} variant="primary">
              Live Demo
            </Button>
          )}
          {project.github && (
            <Button href={project.github} variant="ghost">
              {codeLabel}
            </Button>
          )}
        </div>
      )}
      {!project.demo && !project.github && (
        <p className="project-note">Walkthrough and source details available on request.</p>
      )}
    </article>
  )
}

export default ProjectCard
