
import { NextRequest, NextResponse } from 'next/server'
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'

export async function get(req: NextRequest) {
  const supabase = createRouteHandlerClient({ req })
  const { searchParams } = new URL(req.url)
  const code = searchParams.get('code')
  if (code) {
    await supabase.auth.exchangeCodeForSession(code)
  }
  return NextResponse.redirect('/')
}