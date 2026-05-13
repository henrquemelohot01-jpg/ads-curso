import { NextResponse } from 'next/server';
import { MercadoPagoConfig, Payment } from 'mercadopago';
import { createClient } from '@supabase/supabase-js';

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    if (body.type !== 'payment' && body.action !== 'payment.updated') {
      return NextResponse.json({ ok: true });
    }

    const paymentId = body.data?.id;
    if (!paymentId) return NextResponse.json({ ok: true });

    const accessToken = process.env.MERCADOPAGO_ACCESS_TOKEN;
    if (!accessToken) return NextResponse.json({ error: 'Token não configurado' }, { status: 500 });

    const client = new MercadoPagoConfig({ accessToken });
    const payment = new Payment(client);
    const result = await payment.get({ id: paymentId });

    if (result.status === 'approved') {
      const userId = result.metadata?.user_id;
      const email = result.metadata?.email;

      if (userId) {
        // Salvar acesso vitalício no Supabase
        await supabaseAdmin.from('ads_access').upsert({
          user_id: userId,
          email: email || '',
          plan: 'vitalicio',
          payment_id: String(paymentId),
          amount: result.transaction_amount,
          status: 'active',
          paid_at: new Date().toISOString(),
        }, { onConflict: 'user_id' });

        console.log(`[Webhook] Acesso vitalício liberado para ${userId}`);
      }
    }

    return NextResponse.json({ ok: true });
  } catch (error: any) {
    console.error('[Webhook] Erro:', error?.message);
    return NextResponse.json({ error: 'Erro no webhook' }, { status: 500 });
  }
}
