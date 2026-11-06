// Capa ilustrada (SVG) usada enquanto o projeto não tem um print real.
// As cores vêm das variáveis CSS, então a capa acompanha o tema.

function Frame({ children }) {
  return (
    <>
      <rect className="cv-bg" x="0" y="0" width="400" height="240" />
      <rect className="cv-window" x="24" y="20" width="352" height="220" rx="10" />
      <circle className="cv-dot" cx="42" cy="36" r="3.5" />
      <circle className="cv-dot" cx="54" cy="36" r="3.5" />
      <circle className="cv-dot" cx="66" cy="36" r="3.5" />
      <line className="cv-line" x1="24" y1="52" x2="376" y2="52" />
      {children}
    </>
  )
}

function GraphCover() {
  const materials = [
    { x: 80, y: 92, label: 'Resina' },
    { x: 80, y: 196, label: 'Tinta' },
    { x: 320, y: 92, label: 'Embalagem' },
    { x: 320, y: 196, label: 'Base' },
  ]
  return (
    <Frame>
      {materials.map((m) => (
        <line key={m.label} className="cv-edge" x1="200" y1="144" x2={m.x} y2={m.y} />
      ))}
      <line className="cv-edge cv-edge--accent" x1="200" y1="144" x2="200" y2="78" />
      <rect className="cv-node cv-node--accent" x="168" y="62" width="64" height="24" rx="12" />
      <text className="cv-text cv-text--on-accent" x="200" y="78" textAnchor="middle">
        OP-0042
      </text>
      {materials.map((m) => (
        <g key={m.label}>
          <rect className="cv-node" x={m.x - 38} y={m.y - 12} width="76" height="24" rx="12" />
          <text className="cv-text" x={m.x} y={m.y + 4} textAnchor="middle">
            {m.label}
          </text>
        </g>
      ))}
      <circle className="cv-hub" cx="200" cy="144" r="30" />
      <text className="cv-text cv-text--strong" x="200" y="141" textAnchor="middle">
        Produto
      </text>
      <text className="cv-text cv-text--muted" x="200" y="155" textAnchor="middle">
        ficha técnica
      </text>
    </Frame>
  )
}

function DashboardCover() {
  const bars = [46, 72, 58, 96, 80, 110, 88]
  return (
    <Frame>
      <rect className="cv-surface" x="24" y="52" width="72" height="188" />
      {[72, 94, 116, 138].map((y, i) => (
        <rect key={y} className={i === 0 ? 'cv-accent' : 'cv-muted'} x="38" y={y} width={i === 0 ? 44 : 36} height="8" rx="4" />
      ))}
      {[112, 196, 280].map((x, i) => (
        <g key={x}>
          <rect className="cv-card" x={x} y="66" width="76" height="44" rx="8" />
          <rect className="cv-muted" x={x + 10} y="76" width="34" height="6" rx="3" />
          <rect className={i === 1 ? 'cv-accent' : 'cv-strong'} x={x + 10} y="90" width={i === 1 ? 46 : 38} height="10" rx="3" />
        </g>
      ))}
      <rect className="cv-card" x="112" y="122" width="244" height="102" rx="8" />
      {bars.map((h, i) => (
        <rect
          key={i}
          className={i === 5 ? 'cv-accent' : 'cv-bar'}
          x={130 + i * 32}
          y={212 - h * 0.75}
          width="18"
          height={h * 0.75}
          rx="4"
        />
      ))}
    </Frame>
  )
}

function TableCover() {
  const rows = [
    ['Engenharia de Software', 'Ana Lima', 'Ativo'],
    ['Banco de Dados II', 'Carlos Souza', 'Ativo'],
    ['Programação Web', 'Marina Alves', 'Novo'],
    ['Redes de Computadores', 'Paulo Reis', 'Ativo'],
  ]
  return (
    <Frame>
      <rect className="cv-accent" x="44" y="66" width="90" height="10" rx="5" />
      <rect className="cv-node cv-node--accent" x="300" y="62" width="58" height="20" rx="10" />
      <text className="cv-text cv-text--on-accent" x="329" y="76" textAnchor="middle">
        + Novo
      </text>
      <rect className="cv-surface" x="40" y="94" width="320" height="22" rx="6" />
      {['Disciplina', 'Professor', 'Status'].map((h, i) => (
        <text key={h} className="cv-text cv-text--muted" x={[52, 210, 312][i]} y="109">
          {h}
        </text>
      ))}
      {rows.map((row, r) => (
        <g key={row[0]}>
          <line className="cv-line" x1="40" y1={140 + r * 24} x2="360" y2={140 + r * 24} />
          <text className="cv-text" x="52" y={133 + r * 24}>
            {row[0]}
          </text>
          <text className="cv-text cv-text--muted" x="210" y={133 + r * 24}>
            {row[1]}
          </text>
          <rect className={row[2] === 'Novo' ? 'cv-pill cv-pill--accent' : 'cv-pill'} x="306" y={122 + r * 24} width="40" height="15" rx="7.5" />
          <text className="cv-text cv-text--tiny" x="326" y={133 + r * 24} textAnchor="middle">
            {row[2]}
          </text>
        </g>
      ))}
    </Frame>
  )
}

const covers = { graph: GraphCover, dashboard: DashboardCover, table: TableCover }

export default function ProjectCover({ project, eager = false }) {
  if (project.image) {
    return (
      <img
        className="cover-img"
        src={project.image}
        alt={`Tela do projeto ${project.title}`}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
      />
    )
  }
  const Cover = covers[project.cover] ?? GraphCover
  return (
    <svg className="cover-svg" viewBox="0 0 400 240" role="img" aria-label={`Ilustração do projeto ${project.title}`}>
      <Cover />
    </svg>
  )
}
