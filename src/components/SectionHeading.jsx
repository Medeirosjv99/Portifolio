export default function SectionHeading({ index, eyebrow, title, children }) {
  return (
    <header className="section-heading" data-reveal>
      <p className="eyebrow">
        <span className="eyebrow__index">{index}</span>
        <span className="eyebrow__line" aria-hidden="true" />
        {eyebrow}
      </p>
      <h2 className="section-title">{title}</h2>
      {children && <p className="section-lead">{children}</p>}
    </header>
  )
}
