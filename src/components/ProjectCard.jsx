import Button from './Button.jsx'
import Tag from './Tag.jsx'

import { useState } from 'react'

function ProjectCard({ project }) {
  const [imageFailed, setImageFailed] = useState(false)
  const codeLabel = project.githubLabel || 'View Code'

  return (
    <article className="project-card surface fade-in">
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
      <div className="project-topline">
        <p className="project-kicker">{project.kicker || project.role}</p>
        {(project.role || project.timeline) && (
          <p className="project-meta">
            {[project.role, project.timeline].filter(Boolean).join(' | ')}
          </p>
        )}
      </div>
      <h3 className="project-title">{project.title}</h3>
      <div className="project-tags">
        {project.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
      <p className="project-desc">{project.description}</p>
      <div className="project-story">
        <div>
          <h4>What I built</h4>
          <p className="project-problem">{project.problem}</p>
        </div>
        {project.outcome && (
          <div>
            <h4>Why it matters</h4>
            <p className="project-outcome">{project.outcome}</p>
          </div>
        )}
      </div>
      <div className="project-highlights-wrap">
        <h4>Key features</h4>
        <ul className="project-highlights">
          {project.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
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
