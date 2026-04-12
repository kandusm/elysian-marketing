import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { z } from 'zod'

const schema = z.object({
  email: z.string().email(),
})

export async function POST(request: NextRequest) {
  const body = await request.json()
  const parsed = schema.safeParse(body)

  if (!parsed.success) {
    return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
  }

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )

  const { error } = await supabase
    .schema('marketing')
    .from('waitlist')
    .insert({ email: parsed.data.email })

  if (error?.code === '23505') {
    return NextResponse.json({ message: 'Already on the list' }, { status: 200 })
  }

  if (error) {
    console.error('Waitlist error:', error)
    return NextResponse.json({ error: 'Failed to join' }, { status: 500 })
  }

  return NextResponse.json({ message: 'You are on the list' }, { status: 200 })
}
