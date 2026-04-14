function ServiceCard({ title, description, outcome, icon }) {
  return (
    <article className="service-card surface fade-in">
      <div className="service-icon" aria-hidden="true">
        {icon}
      </div>
      <div className="service-copy">
        <h3>{title}</h3>
        <p>{description}</p>
        <small>{outcome}</small>
      </div>
    </article>
  )
}

export default ServiceCard
