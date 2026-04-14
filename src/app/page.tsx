import Link from 'next/link'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { ElysianLogo } from '@/components/ElysianLogo'

export default function Home() {
  return (
    <>
      <Nav />

      {/* Hero Section */}
      <section style={{
        minHeight: 'calc(100vh - 80px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '64px 24px',
        textAlign: 'center',
      }}>
        <div style={{ marginBottom: 48 }}>
          <ElysianLogo size="lg" />
        </div>

        <h1 style={{
          fontFamily: 'Cinzel, Georgia, serif',
          fontSize: 'clamp(32px, 5vw, 48px)',
          fontWeight: 400,
          lineHeight: 1.2,
          letterSpacing: '-0.01em',
          marginBottom: 24,
          color: 'rgba(224, 233, 248, 0.92)',
        }}>
          Your household&apos;s<br />
          financial intelligence.
        </h1>

        <p style={{
          fontSize: 'clamp(16px, 2vw, 18px)',
          lineHeight: 1.7,
          color: 'rgba(224, 233, 248, 0.55)',
          maxWidth: 560,
          marginBottom: 40,
        }}>
          A real double-entry ledger. AI that learns your financial patterns.
          Privacy-aware household visibility. Built for the way families actually work.
        </p>

        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 24 }}>
          <a
            href="https://app.elysian.money/signup"
            style={{
              padding: '14px 32px',
              background: 'rgba(100, 130, 220, 0.80)',
              borderRadius: 8,
              fontSize: 15,
              fontWeight: 500,
              color: 'rgba(224, 233, 248, 0.92)',
            }}
          >
            Start free trial
          </a>
          <a
            href="https://app.elysian.money/login"
            style={{
              padding: '14px 32px',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.10)',
              borderRadius: 8,
              fontSize: 15,
              color: 'rgba(224, 233, 248, 0.55)',
            }}
          >
            Sign in
          </a>
        </div>

        <p style={{
          fontSize: 12,
          color: 'rgba(224, 233, 248, 0.28)',
        }}>
          Not financial advice. 14-day free trial on paid plans. Card required.
        </p>
      </section>

      {/* Problem Statement */}
      <section style={{
        padding: '80px 24px',
        display: 'flex',
        justifyContent: 'center',
      }}>
        <div style={{
          maxWidth: 680,
          padding: '48px 40px',
          background: '#0F1622',
          borderRadius: 16,
          border: '1px solid rgba(255, 255, 255, 0.06)',
          textAlign: 'center',
        }}>
          <p style={{
            fontSize: 18,
            lineHeight: 1.8,
            color: 'rgba(224, 233, 248, 0.55)',
          }}>
            Most finance apps show you where your money went.
          </p>
          <p style={{
            fontSize: 18,
            lineHeight: 1.8,
            color: 'rgba(224, 233, 248, 0.92)',
            marginTop: 16,
          }}>
            Elysian shows your household where it&apos;s going — and gets smarter every month.
          </p>
        </div>
      </section>

      {/* Three Core Differentiators */}
      <section style={{
        padding: '80px 24px',
        maxWidth: 1200,
        margin: '0 auto',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 32,
        }}>
          <div style={{ padding: 24 }}>
            <div style={{
              width: 8,
              height: 8,
              background: 'rgba(100, 130, 220, 0.80)',
              borderRadius: 2,
              transform: 'rotate(45deg)',
              marginBottom: 20,
            }} />
            <h3 style={{
              fontSize: 18,
              fontWeight: 600,
              color: 'rgba(224, 233, 248, 0.92)',
              marginBottom: 12,
            }}>
              Real Accounting
            </h3>
            <p style={{
              fontSize: 14,
              lineHeight: 1.7,
              color: 'rgba(224, 233, 248, 0.55)',
            }}>
              Most apps track transactions. Elysian records them as balanced journal entries in a double-entry
              ledger — the same accounting foundation used by every serious business. Your household deserves
              the same rigor.
            </p>
          </div>

          <div style={{ padding: 24 }}>
            <div style={{
              width: 8,
              height: 8,
              background: 'rgba(100, 130, 220, 0.80)',
              borderRadius: 2,
              transform: 'rotate(45deg)',
              marginBottom: 20,
            }} />
            <h3 style={{
              fontSize: 18,
              fontWeight: 600,
              color: 'rgba(224, 233, 248, 0.92)',
              marginBottom: 12,
            }}>
              Privacy-Aware Household
            </h3>
            <p style={{
              fontSize: 14,
              lineHeight: 1.7,
              color: 'rgba(224, 233, 248, 0.55)',
            }}>
              Share what you want, keep private what you don&apos;t. Every account has granular visibility
              controls — private, aggregated, or fully shared with household members. Privacy is enforced
              at the database layer, not just the UI.
            </p>
          </div>

          <div style={{ padding: 24 }}>
            <div style={{
              width: 8,
              height: 8,
              background: 'rgba(100, 130, 220, 0.80)',
              borderRadius: 2,
              transform: 'rotate(45deg)',
              marginBottom: 20,
            }} />
            <h3 style={{
              fontSize: 18,
              fontWeight: 600,
              color: 'rgba(224, 233, 248, 0.92)',
              marginBottom: 12,
            }}>
              AI That Knows Your Numbers
            </h3>
            <p style={{
              fontSize: 14,
              lineHeight: 1.7,
              color: 'rgba(224, 233, 248, 0.55)',
            }}>
              The AI CFO has access to your actual financial data — not generic advice. Ask it when you can
              retire, how long your savings would last if you lost your income, or what your burn rate
              means for your goals.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section style={{
        padding: '80px 24px',
        maxWidth: 1000,
        margin: '0 auto',
      }}>
        <h2 style={{
          fontFamily: 'Cinzel, Georgia, serif',
          fontSize: 24,
          fontWeight: 400,
          textAlign: 'center',
          marginBottom: 64,
          color: 'rgba(224, 233, 248, 0.92)',
        }}>
          How it works
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: 48,
        }}>
          <div>
            <div style={{
              fontSize: 32,
              fontWeight: 300,
              color: 'rgba(100, 130, 220, 0.80)',
              marginBottom: 16,
            }}>
              1
            </div>
            <h3 style={{
              fontSize: 16,
              fontWeight: 600,
              color: 'rgba(224, 233, 248, 0.92)',
              marginBottom: 8,
            }}>
              Connect your accounts
            </h3>
            <p style={{
              fontSize: 14,
              lineHeight: 1.7,
              color: 'rgba(224, 233, 248, 0.55)',
            }}>
              Link your bank accounts via Plaid or import statements manually.
              Transactions are normalized and ready for review in minutes.
            </p>
          </div>

          <div>
            <div style={{
              fontSize: 32,
              fontWeight: 300,
              color: 'rgba(100, 130, 220, 0.80)',
              marginBottom: 16,
            }}>
              2
            </div>
            <h3 style={{
              fontSize: 16,
              fontWeight: 600,
              color: 'rgba(224, 233, 248, 0.92)',
              marginBottom: 8,
            }}>
              Confirm and categorize
            </h3>
            <p style={{
              fontSize: 14,
              lineHeight: 1.7,
              color: 'rgba(224, 233, 248, 0.55)',
            }}>
              Review imported transactions, confirm them into your ledger,
              and watch your net worth update in real time.
            </p>
          </div>

          <div>
            <div style={{
              fontSize: 32,
              fontWeight: 300,
              color: 'rgba(100, 130, 220, 0.80)',
              marginBottom: 16,
            }}>
              3
            </div>
            <h3 style={{
              fontSize: 16,
              fontWeight: 600,
              color: 'rgba(224, 233, 248, 0.92)',
              marginBottom: 8,
            }}>
              Ask your CFO
            </h3>
            <p style={{
              fontSize: 14,
              lineHeight: 1.7,
              color: 'rgba(224, 233, 248, 0.55)',
            }}>
              Your AI CFO has access to your complete financial picture.
              Ask forward-looking questions and get answers grounded in your real data.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section style={{
        padding: '80px 24px',
        textAlign: 'center',
      }}>
        <p style={{
          fontSize: 20,
          color: 'rgba(224, 233, 248, 0.92)',
          marginBottom: 8,
        }}>
          Plans from $1/month.
        </p>
        <p style={{
          fontSize: 14,
          color: 'rgba(224, 233, 248, 0.55)',
          marginBottom: 24,
        }}>
          14-day free trial on Solo, Household, and Power plans.
        </p>
        <Link
          href="/pricing"
          style={{
            fontSize: 14,
            color: 'rgba(100, 130, 220, 0.80)',
            textDecoration: 'underline',
            textUnderlineOffset: 4,
          }}
        >
          See full pricing →
        </Link>
      </section>

      <Footer />
    </>
  )
}
