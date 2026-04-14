'use client'

import { useState } from 'react'
import { Metadata } from 'next'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'

const PLANS = [
  {
    name: 'Starter',
    monthlyPrice: 1,
    annualPrice: 10,
    features: [
      '2 bank connections',
      'Manual entry unlimited',
      'CSV/OFX import',
      'Basic net worth dashboard',
      'No AI features',
      'No household',
    ],
    cta: 'Get started',
    hasTrial: false,
  },
  {
    name: 'Solo',
    monthlyPrice: 8,
    annualPrice: 84,
    features: [
      '5 bank connections',
      'Full transaction history',
      'PDF extraction (AI)',
      'AI classification',
      'Email alerts',
      'No household',
    ],
    cta: 'Start free trial',
    hasTrial: true,
  },
  {
    name: 'Household',
    monthlyPrice: 20,
    annualPrice: 204,
    features: [
      '15 bank connections',
      'Up to 6 household members',
      'Full visibility controls',
      'PDF extraction (AI)',
      'AI-powered household recommendations',
      'Advanced categorization',
    ],
    cta: 'Start free trial',
    hasTrial: true,
    popular: true,
  },
  {
    name: 'Power',
    monthlyPrice: 40,
    annualPrice: 408,
    features: [
      'Unlimited connections',
      'Unlimited household members',
      'Everything in Household',
      'Monte Carlo simulation',
      'AI CFO chat interface',
      'Full data export',
    ],
    cta: 'Start free trial',
    hasTrial: true,
  },
]

function PricingCard({
  plan,
  isAnnual,
}: {
  plan: typeof PLANS[0]
  isAnnual: boolean
}) {
  const price = isAnnual ? plan.annualPrice : plan.monthlyPrice
  const period = isAnnual ? '/year' : '/month'
  const savings = isAnnual
    ? Math.round((1 - plan.annualPrice / (plan.monthlyPrice * 12)) * 100)
    : 0

  return (
    <div
      style={{
        padding: 32,
        background: '#0F1622',
        borderRadius: 16,
        border: plan.popular
          ? '1px solid rgba(100, 130, 220, 0.40)'
          : '1px solid rgba(255, 255, 255, 0.06)',
        position: 'relative',
      }}
    >
      {plan.popular && (
        <div
          style={{
            position: 'absolute',
            top: -12,
            left: '50%',
            transform: 'translateX(-50%)',
            padding: '4px 16px',
            background: 'rgba(100, 130, 220, 0.80)',
            borderRadius: 12,
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: '0.05em',
            color: 'rgba(224, 233, 248, 0.92)',
          }}
        >
          MOST POPULAR
        </div>
      )}

      <h3
        style={{
          fontSize: 20,
          fontWeight: 600,
          color: 'rgba(224, 233, 248, 0.92)',
          marginBottom: 8,
        }}
      >
        {plan.name}
      </h3>

      <div style={{ marginBottom: 24 }}>
        <span
          style={{
            fontSize: 36,
            fontWeight: 600,
            color: 'rgba(224, 233, 248, 0.92)',
          }}
        >
          ${price}
        </span>
        <span
          style={{
            fontSize: 14,
            color: 'rgba(224, 233, 248, 0.45)',
          }}
        >
          {period}
        </span>
        {isAnnual && savings > 0 && (
          <span
            style={{
              marginLeft: 8,
              padding: '2px 8px',
              background: 'rgba(100, 200, 120, 0.15)',
              borderRadius: 4,
              fontSize: 11,
              color: 'rgba(100, 200, 120, 0.90)',
            }}
          >
            Save {savings}%
          </span>
        )}
      </div>

      <ul
        style={{
          listStyle: 'none',
          padding: 0,
          marginBottom: 32,
        }}
      >
        {plan.features.map((feature, i) => (
          <li
            key={i}
            style={{
              fontSize: 14,
              color: 'rgba(224, 233, 248, 0.55)',
              marginBottom: 12,
              paddingLeft: 20,
              position: 'relative',
            }}
          >
            <span
              style={{
                position: 'absolute',
                left: 0,
                color: 'rgba(100, 130, 220, 0.80)',
              }}
            >
              ✓
            </span>
            {feature}
          </li>
        ))}
      </ul>

      <a
        href="https://app.elysian.money/signup"
        style={{
          display: 'block',
          textAlign: 'center',
          padding: '12px 24px',
          background: plan.popular
            ? 'rgba(100, 130, 220, 0.80)'
            : 'rgba(255, 255, 255, 0.05)',
          border: plan.popular
            ? 'none'
            : '1px solid rgba(255, 255, 255, 0.10)',
          borderRadius: 8,
          fontSize: 14,
          fontWeight: 500,
          color: 'rgba(224, 233, 248, 0.92)',
        }}
      >
        {plan.cta}
      </a>
    </div>
  )
}

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false)

  return (
    <>
      <Nav />

      <main
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '64px 24px 96px',
        }}
      >
        <h1
          style={{
            fontFamily: 'Cinzel, Georgia, serif',
            fontSize: 32,
            fontWeight: 400,
            textAlign: 'center',
            marginBottom: 16,
            color: 'rgba(224, 233, 248, 0.92)',
          }}
        >
          Pricing
        </h1>

        <p
          style={{
            fontSize: 16,
            textAlign: 'center',
            color: 'rgba(224, 233, 248, 0.55)',
            marginBottom: 48,
          }}
        >
          Choose the plan that fits your household.
        </p>

        {/* Toggle */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 16,
            marginBottom: 48,
          }}
        >
          <span
            style={{
              fontSize: 14,
              color: !isAnnual
                ? 'rgba(224, 233, 248, 0.92)'
                : 'rgba(224, 233, 248, 0.45)',
            }}
          >
            Monthly
          </span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            style={{
              width: 48,
              height: 26,
              borderRadius: 13,
              background: isAnnual
                ? 'rgba(100, 130, 220, 0.80)'
                : 'rgba(255, 255, 255, 0.10)',
              border: 'none',
              cursor: 'pointer',
              position: 'relative',
              transition: 'background 0.2s',
            }}
          >
            <div
              style={{
                width: 20,
                height: 20,
                borderRadius: 10,
                background: 'rgba(224, 233, 248, 0.92)',
                position: 'absolute',
                top: 3,
                left: isAnnual ? 25 : 3,
                transition: 'left 0.2s',
              }}
            />
          </button>
          <span
            style={{
              fontSize: 14,
              color: isAnnual
                ? 'rgba(224, 233, 248, 0.92)'
                : 'rgba(224, 233, 248, 0.45)',
            }}
          >
            Annual
            <span
              style={{
                marginLeft: 8,
                padding: '2px 8px',
                background: 'rgba(100, 200, 120, 0.15)',
                borderRadius: 4,
                fontSize: 11,
                color: 'rgba(100, 200, 120, 0.90)',
              }}
            >
              Save ~15%
            </span>
          </span>
        </div>

        {/* Plan Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: 24,
            marginBottom: 48,
          }}
        >
          {PLANS.map((plan) => (
            <PricingCard key={plan.name} plan={plan} isAnnual={isAnnual} />
          ))}
        </div>

        {/* Notes */}
        <div
          style={{
            textAlign: 'center',
            fontSize: 13,
            color: 'rgba(224, 233, 248, 0.45)',
            lineHeight: 1.8,
          }}
        >
          <p>All plans include a 14-day free trial (card required).</p>
          <p>Cancel anytime. No contracts.</p>
          <p>Prices in USD, billed as selected.</p>
        </div>
      </main>

      <Footer />
    </>
  )
}
