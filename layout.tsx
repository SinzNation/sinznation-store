import Image from 'next/image';
import Link from 'next/link';
import BuyButton from '@/components/BuyButton';
import { product } from '@/lib/products';

export default function ProductPage() {
  return (
    <main className="min-h-screen bg-[#050505] px-6 py-8 text-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between py-4">
        <Link href="/" className="font-display text-4xl tracking-wide">SinzNation</Link>
        <Link href="/#reels" className="text-sm uppercase tracking-[.22em] text-neutral-400">Reels</Link>
      </nav>
      <section className="mx-auto grid max-w-7xl gap-10 py-16 md:grid-cols-2">
        <div className="card rounded-[2.5rem] p-6">
          <Image src={product.image} alt={product.name} width={1000} height={1000} className="rounded-[2rem]" priority />
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-sm uppercase tracking-[.3em] text-neutral-500">Official drop 001</p>
          <h1 className="mt-3 font-display text-7xl leading-none tracking-wide">{product.name}</h1>
          <p className="mt-5 text-lg leading-8 text-neutral-300">{product.description}</p>
          <p className="mt-6 text-4xl font-black">{product.price}</p>
          <div className="my-8 h-px bg-white/10" />
          <p className="mb-3 text-sm uppercase tracking-[.22em] text-neutral-400">Choose size</p>
          <BuyButton />
          <div className="mt-8 rounded-3xl border border-white/10 bg-white/[.03] p-5 text-sm leading-7 text-neutral-400">
            <strong className="text-white">Checkout note:</strong> This uses Stripe Checkout. Add your Stripe keys in Vercel environment variables before taking real orders.
          </div>
        </div>
      </section>
    </main>
  );
}
