import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const priceId = process.env.STRIPE_PRICE_ID;
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

export async function POST(request: Request) {
  try {
    if (!stripeSecretKey || !priceId) {
      return NextResponse.json({ error: 'Missing Stripe environment variables.' }, { status: 500 });
    }

    const { size } = await request.json();
    const stripe = new Stripe(stripeSecretKey);

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: [
        {
          price: priceId,
          quantity: 1
        }
      ],
      metadata: {
        product: 'Drink Water & Respect Women Tee',
        size: size || 'L'
      },
      shipping_address_collection: {
        allowed_countries: ['US']
      },
      success_url: `${baseUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/cancel`
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Stripe checkout error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
