import Link from 'next/link';

export default function SuccessPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#050505] px-6 text-white">
      <div className="card max-w-xl rounded-[2.5rem] p-10 text-center">
        <p className="text-sm uppercase tracking-[.3em] text-neutral-500">Order received</p>
        <h1 className="mt-4 font-display text-7xl tracking-wide">Welcome To The Nation</h1>
        <p className="mt-4 leading-7 text-neutral-300">Your checkout was successful. Stripe will send the receipt and order details.</p>
        <Link href="/" className="btn btn-primary mt-8">Back Home</Link>
      </div>
    </main>
  );
}
