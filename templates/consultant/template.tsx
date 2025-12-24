import React from 'react';

export default function ConsultantTemplate(){
  return (
    <section className="max-w-5xl mx-auto py-16 px-6">
      <header className="mb-10">
        <h1 className="text-4xl font-extrabold">Consultant Portfolio Template</h1>
        <p className="text-muted-foreground mt-2">Personal branding focused layout with case studies and services.</p>
      </header>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold">About</h2>
        <p className="text-muted-foreground mt-2">Short bio and areas of expertise.</p>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">Case Studies</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[1,2].map(i => (
            <article key={i} className="border rounded p-4">
              <h4 className="font-semibold">Case Study {i}</h4>
              <p className="text-sm text-muted-foreground mt-2">Problem, approach, result summary.</p>
            </article>
          ))}
        </div>
      </section>

      <section className="p-6 border rounded">
        <h4 className="font-semibold">Work with me</h4>
        <p className="text-sm text-muted-foreground mt-2">Short CTA and contact button.</p>
        <div className="mt-4"><button className="px-4 py-2 bg-black text-white rounded">Contact</button></div>
      </section>
    </section>
  );
}
