import React from "react";

export default function AgencyTemplate() {
  return (
    <section className="prose max-w-6xl mx-auto py-16 px-6">
      <header className="flex flex-col items-start gap-6 mb-12">
        <h1 className="text-4xl md:text-6xl font-extrabold">Agency Template</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">A clean, conversion-focused agency homepage layout with hero, services, portfolio and contact CTA.</p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Hero</h2>
          <p className="text-muted-foreground">Lead with a bold value prop, short bullet points and a CTA.</p>
          <div className="flex gap-3">
            <button className="px-5 py-3 bg-black text-white rounded">Get started</button>
            <button className="px-5 py-3 border rounded">View work</button>
          </div>
        </div>
        <div className="bg-gray-100 dark:bg-gray-900 rounded-lg h-72 flex items-center justify-center">Hero image placeholder</div>
      </section>

      <section className="mb-12">
        <h3 className="text-2xl font-semibold mb-6">Services</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {['Design', 'Branding', 'Web Dev', 'SEO'].map((s) => (
            <div key={s} className="p-6 border rounded-lg bg-white/60 dark:bg-black/60">
              <h4 className="font-medium">{s}</h4>
              <p className="text-sm text-muted-foreground">Short description about the service and benefits.</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h3 className="text-2xl font-semibold mb-6">Featured Work</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1,2,3].map((i)=> (
            <article key={i} className="rounded-lg overflow-hidden border bg-black/5">
              <div className="h-40 bg-gray-200 dark:bg-gray-800 flex items-center justify-center">Project {i} image</div>
              <div className="p-4">
                <h4 className="font-semibold">Project Title {i}</h4>
                <p className="text-sm text-muted-foreground">One-line summary of the project and results.</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-r from-black/5 to-transparent p-8 rounded-lg">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-xl font-semibold">Ready to start?</h4>
            <p className="text-sm text-muted-foreground">Contact us to discuss your project.</p>
          </div>
          <div>
            <button className="px-6 py-3 bg-black text-white rounded">Contact</button>
          </div>
        </div>
      </section>
    </section>
  );
}
