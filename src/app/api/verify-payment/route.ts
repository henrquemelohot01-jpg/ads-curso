import { NextResponse } from 'next/server';
import { MercadoPagoConfig, Payment } from 'mercadopago';
import { createClient } from '@supabase/supabase-js';

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
);

export async function POST(request: Request) {
  try {
    const { transactionId } = await request.json();
    const accessToken = process.env.MERCADOPAGO_ACCESS_TOKEN;
    if (!accessToken) return NextResponse.json({ error: 'Erro' }, { status: 500 });

    const client = new MercadoPagoConfig({ accessToken });
    const payment = new Payment(client);
    const result = await payment.get({ id: transactionId });

    const approved = result.status === 'approved';

    // Se aprovado, salvar acesso vitalício no Supabase
    if (approved && result.metadata?.user_id) {
      await supabaseAdmin.from('ads_access').upsert({
        user_id: result.metadata.user_id,
        email: result.metadata.email || '',
        plan: 'vitalicio',
        payment_id: String(transactionId),
        amount: result.transaction_amount,
        status: 'active',
        paid_at: new Date().toISOString(),
      }, { onConflict: 'user_id' });

      console.log(`[Verify] Acesso vitalício liberado para ${result.metadata.user_id}`);
    }

    return NextResponse.json({ status: result.status, approved });
  } catch (error: any) {
    console.error('[Verify] Erro:', error?.message);
    return NextResponse.json({ error: 'Erro ao verificar.' }, { status: 500 });
  }
}
