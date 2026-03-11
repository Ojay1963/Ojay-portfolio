function SkillCard({ title, items }) {
  return (
    <div className="skill-card glass fade-in">
      <h4>{title}</h4>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default SkillCard
