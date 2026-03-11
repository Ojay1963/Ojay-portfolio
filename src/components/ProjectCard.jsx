import Button from './Button.jsx'
import Tag from './Tag.jsx'

import { useState } from 'react'

function ProjectCard({ project }) {
  const [imageFailed, setImageFailed] = useState(false)

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
      <div className="project-tags">
        {project.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
      <p className="project-desc">{project.description}</p>
      <p className="project-problem">{project.problem}</p>
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
              View Code
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
