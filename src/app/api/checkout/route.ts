import { NextResponse } from 'next/server';
import { MercadoPagoConfig, Payment } from 'mercadopago';
import { v4 as uuidv4 } from 'uuid';

export async function POST(request: Request) {
  try {
    const { userId, email, name } = await request.json();

    const accessToken = process.env.MERCADOPAGO_ACCESS_TOKEN;
    if (!accessToken) {
      return NextResponse.json({ error: 'Gateway não configurado.' }, { status: 500 });
    }

    const client = new MercadoPagoConfig({ accessToken });
    const payment = new Payment(client);

    const host = request.headers.get('host') || 'localhost:3000';
    const isProduction = !host.includes('localhost');
    const notificationUrl = isProduction ? `https://${host}/api/webhook` : undefined;

    const result = await payment.create({
      body: {
        transaction_amount: 37,
        description: 'ADS Master Pro - Acesso Vitalício Completo',
        payment_method_id: 'pix',
        payer: {
          email: email || 'cliente@adsmasterpro.com',
          first_name: name || 'Cliente',
          last_name: 'ADS Master Pro',
        },
        metadata: {
          user_id: userId,
          plan: 'vitalicio',
          email: email || '',
        },
        ...(notificationUrl ? { notification_url: notificationUrl } : {}),
      },
      requestOptions: { idempotencyKey: uuidv4() },
    });

    if (!result.id) {
      return NextResponse.json({
        error: (result as any).message || 'Erro ao criar pagamento'
      }, { status: 400 });
    }

    const pixInfo = result.point_of_interaction?.transaction_data;

    return NextResponse.json({
      transactionId: String(result.id),
      qrCode: pixInfo?.qr_code || '',
      qrCodeBase64: pixInfo?.qr_code_base64 || '',
      ticketUrl: pixInfo?.ticket_url || '',
      status: result.status || 'pending',
    });
  } catch (error: any) {
    console.error('Checkout error:', error?.message || error);
    return NextResponse.json({ error: 'Erro ao processar pagamento.' }, { status: 500 });
  }
}
