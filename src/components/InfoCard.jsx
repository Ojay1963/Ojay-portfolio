function InfoCard({ icon, title, description }) {
  return (
    <div className="info-card glass fade-in">
      <div className="icon-btn">{icon}</div>
      <div>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default InfoCard
