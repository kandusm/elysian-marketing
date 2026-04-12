'use client'

import { useState } from 'react'

export default function Home() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      const data = await res.json()

      if (res.ok) {
        setStatus('success')
        setMessage(data.message)
        setEmail('')
      } else {
        setStatus('error')
        setMessage(data.error || 'Something went wrong')
      }
    } catch {
      setStatus('error')
      setMessage('Failed to connect')
    }
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      <main className="max-w-2xl w-full text-center">
        <h1 className="text-5xl sm:text-6xl font-light tracking-tight mb-6">
          Elysian <span className="font-medium">Money</span>
        </h1>

        <p className="text-xl sm:text-2xl text-gray-400 font-light mb-12">
          Household financial intelligence. Built on a real ledger.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-8">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            disabled={status === 'loading'}
            className="flex-1 px-5 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-white/30 transition-colors disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="px-6 py-3 rounded-lg bg-white text-black font-medium hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
          >
            {status === 'loading' ? 'Joining...' : 'Join the waitlist'}
          </button>
        </form>

        {status === 'success' && (
          <p className="text-green-400 mb-8">{message}</p>
        )}
        {status === 'error' && (
          <p className="text-red-400 mb-8">{message}</p>
        )}

        <p className="text-gray-500">
          Already have an account?{' '}
          <a
            href="https://app.elysian.money/login"
            className="text-white hover:underline"
          >
            Sign in →
          </a>
        </p>
      </main>

      <footer className="absolute bottom-8 text-gray-600 text-sm">
        © {new Date().getFullYear()} Elysian Money
      </footer>
    </div>
  )
}
