'use client';

import { useState } from 'react';
import { ShoppingBag } from 'lucide-react';

export default function BuyButton() {
  const [loading, setLoading] = useState(false);

  async function checkout(size: string) {
    setLoading(true);
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ size })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Checkout failed');
      window.location.href = data.url;
    } catch (error) {
      alert(error instanceof Error ? error.message : 'Checkout failed');
      setLoading(false);
    }
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-4 gap-2">
        {['S', 'M', 'L', 'XL'].map((size) => (
          <button key={size} onClick={() => checkout(size)} disabled={loading} className="rounded-2xl border border-white/15 bg-white/5 p-4 font-bold hover:bg-white hover:text-black disabled:opacity-50">
            {size}
          </button>
        ))}
      </div>
      <button onClick={() => checkout('L')} disabled={loading} className="btn btn-primary w-full gap-2">
        {loading ? 'Opening Checkout...' : 'Buy Now'} <ShoppingBag size={18} />
      </button>
    </div>
  );
}
