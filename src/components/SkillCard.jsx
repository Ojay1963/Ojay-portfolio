function SkillCard({ title, items }) {
  return (
    <div className="skill-card surface fade-in">
      <h4>{title}</h4>
      <div className="skill-items">
        {items.map((item) => (
          <span key={item} className="skill-pill">
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

export default SkillCard
