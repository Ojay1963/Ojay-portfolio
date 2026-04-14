function InfoCard({ icon, title, description }) {
  return (
    <div className="info-card surface fade-in">
      <div className="info-icon" aria-hidden="true">
        {icon}
      </div>
      <div>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default InfoCard
