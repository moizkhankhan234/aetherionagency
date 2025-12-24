import React from 'react';

export default function EcommerceTemplate(){
  return (
    <section className="max-w-6xl mx-auto py-16 px-6">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-extrabold">E-commerce Template</h1>
        <p className="text-muted-foreground mt-2">Product grid, featured collections and checkout CTA.</p>
      </header>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1,2,3,4].map(i => (
            <div key={i} className="border rounded overflow-hidden">
              <div className="h-40 bg-gray-200 dark:bg-gray-800 flex items-center justify-center">Product {i}</div>
              <div className="p-4">
                <h4 className="font-semibold">Product {i}</h4>
                <p className="text-sm text-muted-foreground mt-2">Short product description and price.</p>
                <button className="mt-4 px-4 py-2 bg-black text-white rounded">Buy</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 p-6 border rounded text-center">
        <h3 className="font-semibold">Subscribe for offers</h3>
        <p className="text-sm text-muted-foreground mt-2">Email capture CTA for marketing.</p>
      </section>
    </section>
  );
}
