# SinzNation V3 — Next.js + Stripe + Reels Hub

This is a Vercel-ready Next.js rebuild for SinzNation.

## What is included

- Homepage with hero, discipline section, product feature, and reels hub
- Product page for `Drink Water & Respect Women Tee`
- Stripe Checkout API route
- Success and cancel pages
- Mobile-ready dark stoic design

## Required image files

Put these two images in the `public` folder:

```txt
public/sinznation-logo.png
public/drink-water-shirt.png
```

If your images are currently in the old repo root, drag them into the `public` folder in GitHub.

## Local setup

```bash
npm install
npm run dev
```

Open:

```txt
http://localhost:3000
```

## Stripe setup

1. Create a Stripe account.
2. Go to Stripe Dashboard → Products.
3. Create a product named `Drink Water & Respect Women Tee`.
4. Add a one-time price, for example `$35.00`.
5. Copy the Price ID. It starts with `price_`.
6. Go to Developers → API keys.
7. Copy your Secret key and Publishable key.

## Environment variables

In Vercel → Project → Settings → Environment Variables, add:

```txt
STRIPE_SECRET_KEY=sk_test_your_key_here
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_key_here
STRIPE_PRICE_ID=price_your_price_id_here
NEXT_PUBLIC_BASE_URL=https://yourdomain.com
```

For testing on the Vercel URL, use:

```txt
NEXT_PUBLIC_BASE_URL=https://sinz-nation.vercel.app
```

After adding environment variables, redeploy.

## Editing reels

Open:

```txt
lib/products.ts
```

Replace the `reels` URLs with your actual TikTok, Instagram Reel, or YouTube Short links.

## Deploy on Vercel

1. Upload this repo to GitHub.
2. Import the repo in Vercel.
3. Framework preset should be Next.js.
4. Add environment variables.
5. Deploy.

## Test checkout

Use Stripe test card:

```txt
4242 4242 4242 4242
Any future date
Any CVC
Any ZIP
```

Switch from test mode to live mode only when you are ready to accept real orders.
