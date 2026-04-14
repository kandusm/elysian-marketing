'use client'

import Link from 'next/link'
import { ElysianLogo } from './ElysianLogo'

export function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid rgba(255, 255, 255, 0.06)',
      padding: '64px 24px',
      textAlign: 'center',
    }}>
      <div style={{ marginBottom: 24 }}>
        <ElysianLogo size="sm" />
      </div>

      <div style={{
        fontSize: 14,
        color: 'rgba(224, 233, 248, 0.55)',
        marginBottom: 24,
      }}>
        elysian.money
      </div>

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: 32,
        marginBottom: 32,
        flexWrap: 'wrap',
      }}>
        <Link
          href="/privacy"
          style={{
            fontSize: 13,
            color: 'rgba(224, 233, 248, 0.45)',
            transition: 'color 0.15s',
          }}
        >
          Privacy Policy
        </Link>
        <Link
          href="/terms"
          style={{
            fontSize: 13,
            color: 'rgba(224, 233, 248, 0.45)',
            transition: 'color 0.15s',
          }}
        >
          Terms of Service
        </Link>
        <Link
          href="/security"
          style={{
            fontSize: 13,
            color: 'rgba(224, 233, 248, 0.45)',
            transition: 'color 0.15s',
          }}
        >
          Security
        </Link>
      </div>

      <div style={{
        fontSize: 12,
        color: 'rgba(224, 233, 248, 0.28)',
        lineHeight: 1.8,
      }}>
        <div>© 2026 CommVergent Automation LLC · Pflugerville, TX</div>
        <div>Not financial advice.</div>
      </div>
    </footer>
  )
}
