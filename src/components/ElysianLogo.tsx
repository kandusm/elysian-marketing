'use client'

interface ElysianLogoProps {
  size?: 'sm' | 'md' | 'lg'
  color?: string
  showWordmark?: boolean
  className?: string
}

const SIZES = {
  sm: { mark: 28, wordmark: 12, sub: 7,  gap: 10 },
  md: { mark: 36, wordmark: 15, sub: 8,  gap: 12 },
  lg: { mark: 52, wordmark: 22, sub: 11, gap: 16 },
}

function ElysianMark({ size, color }: { size: number; color: string }) {
  const cx = 70, cy = 70, R = 70 * 0.88
  const N = 9, S = 2 * Math.PI / N, top = -Math.PI / 2

  function polar(r: number, a: number): [number, number] {
    return [cx + r * Math.cos(a), cy + r * Math.sin(a)]
  }

  function f(n: number) {
    return Math.round(n * 10) / 10
  }

  function triangle(
    tip: [number, number],
    bL: [number, number],
    bR: [number, number],
    key: string
  ) {
    return (
      <path
        key={key}
        d={`M${f(tip[0])},${f(tip[1])}L${f(bL[0])},${f(bL[1])}L${f(bR[0])},${f(bR[1])}Z`}
        fill={color}
      />
    )
  }

  const outerPaths = Array.from({ length: N }, (_, i) => {
    const a = top + i * S
    return triangle(
      polar(R * 0.93, a + S * 0.46),
      polar(R * 0.53, a + S * 0.03),
      polar(R * 0.53, a + S * 0.57),
      `o${i}`
    )
  })

  const innerPaths = Array.from({ length: N }, (_, i) => {
    const a = top + i * S + S * 0.5
    return triangle(
      polar(R * 0.12, a + S * 0.12),
      polar(R * 0.46, a + S * 0.03),
      polar(R * 0.46, a + S * 0.57),
      `i${i}`
    )
  })

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 140 140"
      style={{ flexShrink: 0, display: 'block' }}
      aria-hidden="true"
    >
      {outerPaths}
      {innerPaths}
    </svg>
  )
}

export function ElysianLogo({
  size = 'md',
  color = 'rgba(224, 233, 248, 0.92)',
  showWordmark = true,
  className = '',
}: ElysianLogoProps) {
  const s = SIZES[size]

  return (
    <div
      className={className}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: s.gap,
      }}
    >
      <ElysianMark size={s.mark} color={color} />
      {showWordmark && (
        <div style={{ lineHeight: 1 }}>
          <div
            style={{
              fontFamily: 'Cinzel, Georgia, serif',
              fontWeight: 400,
              fontSize: s.wordmark,
              letterSpacing: '0.20em',
              color,
              lineHeight: 1,
            }}
          >
            ELYSIAN
          </div>
          <div
            style={{
              fontFamily: 'Cinzel, Georgia, serif',
              fontWeight: 400,
              fontSize: s.sub,
              letterSpacing: '0.28em',
              color: color.replace('0.92', '0.28').replace('0.9', '0.28'),
              marginTop: 4,
              lineHeight: 1,
              opacity: 0.6,
            }}
          >
            MONEY
          </div>
        </div>
      )}
    </div>
  )
}
