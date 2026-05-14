import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const token_hash = searchParams.get('token_hash');
  const type = searchParams.get('type');
  const code = searchParams.get('code');

  const redirectUrl = new URL('/plataforma', request.url);

  // Se vier com code (PKCE flow)
  if (code) {
    return NextResponse.redirect(redirectUrl);
  }

  // Se vier com token_hash (magic link)
  if (token_hash && type) {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
    const supabase = createClient(supabaseUrl, supabaseAnonKey);

    const { error } = await supabase.auth.verifyOtp({
      type: type as any,
      token_hash,
    });

    if (error) {
      console.error('Auth callback error:', error);
      redirectUrl.searchParams.set('error', 'auth_failed');
    }
  }

  return NextResponse.redirect(redirectUrl);
}
