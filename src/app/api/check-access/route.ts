import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
);

export async function POST(request: Request) {
  try {
    const { userId } = await request.json();
    if (!userId) return NextResponse.json({ hasAccess: false });

    const { data } = await supabaseAdmin
      .from('ads_access')
      .select('status')
      .eq('user_id', userId)
      .eq('status', 'active')
      .single();

    return NextResponse.json({ hasAccess: !!data });
  } catch {
    return NextResponse.json({ hasAccess: false });
  }
}
