'use client'

import Link from 'next/link'
import { ElysianLogo } from './ElysianLogo'

export function Nav() {
  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: 'rgba(8, 12, 20, 0.95)',
      backdropFilter: 'blur(8px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
      padding: '16px 24px',
    }}>
      <div style={{
        maxWidth: 1200,
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <Link href="/">
          <ElysianLogo size="md" />
        </Link>

        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          <a
            href="https://app.elysian.money/login"
            style={{
              fontSize: 14,
              color: 'rgba(224, 233, 248, 0.55)',
              transition: 'color 0.15s',
            }}
          >
            Sign in
          </a>
          <a
            href="https://app.elysian.money/signup"
            style={{
              fontSize: 14,
              padding: '10px 20px',
              background: 'rgba(100, 130, 220, 0.80)',
              borderRadius: 8,
              color: 'rgba(224, 233, 248, 0.92)',
              transition: 'background 0.15s',
            }}
          >
            Start free trial
          </a>
        </div>
      </div>
    </nav>
  )
}
