import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');
  
  if (code) {
    // Redireciona para a plataforma com o código
    return NextResponse.redirect(new URL(`/plataforma?code=${code}`, request.url));
  }
  
  return NextResponse.redirect(new URL('/plataforma', request.url));
}
