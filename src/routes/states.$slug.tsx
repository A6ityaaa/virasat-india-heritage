import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { CATEGORIES, STATES, type Category } from "@/data/heritage";
import { useContent } from "@/lib/content-store";

export const Route = createFileRoute("/states/$slug")({
  loader: ({ params }) => {
    const seed = STATES.find((s) => s.slug === params.slug);
    if (!seed) throw notFound();
    return { name: seed.name, epithet: seed.epithet, intro: seed.intro };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "State not found — VIRASAT" }, { name: "robots", content: "noindex" }],
      };
    }
    const title = `${loaderData.name} — ${loaderData.epithet} | VIRASAT`;
    const description = loaderData.intro.slice(0, 155);
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  component: StatePage,
});

function StatePage() {
  const { slug } = Route.useParams();
  const { states } = useContent();
  const state = states.find((s) => s.slug === slug);
  const [filter, setFilter] = useState<Category | null>(null);

  if (!state) return null;

  return (
    <article>
      <header className="surface-dusk text-ivory">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <Link to="/" className="eyebrow text-gold/80">
            ← The Atlas
          </Link>
          <p className="eyebrow mt-8 text-gold">{state.epithet}</p>
          <h1 className="mt-3 text-6xl md:text-7xl">{state.name}</h1>
          <p className="lede mt-6 max-w-3xl text-ivory/85">{state.intro}</p>
        </div>
      </header>

      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="flex flex-wrap gap-3">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(filter === c ? null : c)}
              aria-pressed={filter === c}
              className={`eyebrow rounded-full border px-5 py-2.5 transition-colors ${
                filter === c
                  ? "border-maroon bg-maroon text-primary-foreground"
                  : "border-border bg-card text-muted-foreground hover:border-accent hover:text-accent"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-14 space-y-20">
          {state.cities.map((city, i) => {
            const shown = city.highlights.filter((h) => !filter || h.category === filter);
            return (
              <section key={city.id}>
                <p className="eyebrow text-accent">City {String(i + 1).padStart(2, "0")}</p>
                <h2 className="mt-2 text-5xl">{city.name}</h2>
                <p className="mt-2 font-serif text-2xl text-muted-foreground italic">
                  {city.tagline}
                </p>

                <dl className="rule-gold mt-8 grid gap-8 pt-8 md:grid-cols-2">
                  <div>
                    <dt className="eyebrow text-muted-foreground">What they speak</dt>
                    <dd className="mt-2 font-serif text-lg">{city.language}</dd>
                  </div>
                  <div>
                    <dt className="eyebrow text-muted-foreground">What they wear</dt>
                    <dd className="mt-2 font-serif text-lg leading-relaxed">{city.outfit}</dd>
                  </div>
                </dl>

                <div className="mt-10 grid gap-6 md:grid-cols-2">
                  {shown.map((h) => (
                    <div
                      key={h.id}
                      className="border border-border bg-card p-6 [box-shadow:var(--shadow-frame)]"
                    >
                      <p className="eyebrow text-accent">{h.category}</p>
                      <h3 className="mt-2 text-2xl">{h.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {h.blurb}
                      </p>
                    </div>
                  ))}
                  {shown.length === 0 && (
                    <p className="font-serif text-muted-foreground italic">
                      Nothing recorded under {filter} here — yet.
                    </p>
                  )}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </article>
  );
}
