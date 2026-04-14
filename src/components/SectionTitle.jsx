function SectionTitle({
  eyebrow,
  title,
  description,
  align = 'left',
  children,
}) {
  const resolvedTitle = title || children

  return (
    <div className={`section-heading section-heading-${align}`}>
      {eyebrow && <p className="section-eyebrow">{eyebrow}</p>}
      {resolvedTitle && <h2 className="section-title">{resolvedTitle}</h2>}
      {description && <p className="section-description">{description}</p>}
    </div>
  )
}

export default SectionTitle
