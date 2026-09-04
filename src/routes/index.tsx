import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { IndiaMap } from "@/components/IndiaMap";
import { CATEGORIES, type Category } from "@/data/heritage";
import { useContent } from "@/lib/content-store";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VIRASAT — The Living Culture & Heritage of India" },
      {
        name: "description",
        content:
          "An editorial atlas of Indian heritage: monuments, festivals, crafts, food, dress and language, state by state and city by city.",
      },
      { property: "og:title", content: "VIRASAT — The Living Culture & Heritage of India" },
      {
        property: "og:description",
        content:
          "Explore Rajasthan, Kerala, Punjab, West Bengal and Tamil Nadu through an interactive map of monuments, festivals, crafts and food.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  const { states } = useContent();
  const [active, setActive] = useState<Category[]>([]);

  const toggle = (c: Category) =>
    setActive((prev) => (prev.includes(c) ? prev.filter((x) => x !== c) : [...prev, c]));

  const matches = useMemo(() => {
    return states
      .map((s) => {
        const items = s.cities.flatMap((city) =>
          city.highlights
            .filter((h) => active.length === 0 || active.includes(h.category))
            .map((h) => ({ ...h, city: city.name, state: s.name, slug: s.slug })),
        );
        return { state: s, items };
      })
      .filter((row) => row.items.length > 0);
  }, [states, active]);

  const activeSlugs = matches.map((m) => m.state.slug);

  return (
    <div>
      <section className="surface-dusk relative overflow-hidden text-ivory">
        <div className="mx-auto grid max-w-6xl gap-14 px-6 py-20 md:grid-cols-[1.05fr_0.95fr] md:py-28">
          <div>
            <p className="eyebrow text-gold">Est. for the keeping of memory</p>
            <h1 className="mt-6 text-6xl leading-[0.95] md:text-8xl">VIRASAT</h1>
            <p className="lede mt-6 max-w-lg text-ivory/85">
              Inheritance, in the plural. An atlas of the crafts, kitchens, courtyards and calendars
              that keep India's culture alive — written by the places themselves.
            </p>
            <div className="rule-gold mt-10 max-w-lg pt-6">
              <h2 className="text-2xl text-gold">Our mission</h2>
              <p className="mt-3 text-sm leading-relaxed text-ivory/80">
                Heritage does not survive in vitrines. It survives in a weaver who still counts
                threads by hand, in a festival that refuses to be rescheduled, in a recipe passed
                down without measurements. VIRASAT records these living traditions city by city — so
                that what is ordinary today is not lost tomorrow.
              </p>
            </div>
          </div>
          <figure className="flex flex-col items-center justify-center">
            <Seal />
            <figcaption className="eyebrow mt-6 text-center text-gold/80">
              Five states · Twelve cities · One inheritance
            </figcaption>
          </figure>
        </div>
      </section>

      <section id="map" className="mx-auto max-w-6xl px-6 py-20">
        <p className="eyebrow text-accent">The Atlas</p>
        <h2 className="mt-3 text-4xl md:text-5xl">Choose a state. Enter a city.</h2>
        <p className="lede mt-4 max-w-2xl text-muted-foreground">
          Filter by what you came for — then follow the saffron.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {CATEGORIES.map((c) => {
            const on = active.includes(c);
            return (
              <button
                key={c}
                onClick={() => toggle(c)}
                aria-pressed={on}
                className={`eyebrow rounded-full border px-5 py-2.5 transition-colors ${
                  on
                    ? "border-maroon bg-maroon text-primary-foreground"
                    : "border-border bg-card text-muted-foreground hover:border-accent hover:text-accent"
                }`}
              >
                {c}
              </button>
            );
          })}
          {active.length > 0 && (
            <button
              onClick={() => setActive([])}
              className="eyebrow px-3 py-2.5 text-muted-foreground underline decoration-accent/60 underline-offset-4"
            >
              Clear
            </button>
          )}
        </div>

        <div className="mt-12 grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <div className="flex justify-center border border-border bg-card p-6 [box-shadow:var(--shadow-frame)]">
            <IndiaMap states={states} activeSlugs={activeSlugs} />
          </div>

          <div className="space-y-6">
            {matches.map(({ state, items }) => (
              <article key={state.slug} className="border-b border-border pb-6">
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <h3 className="text-3xl">
                    <Link
                      to="/states/$slug"
                      params={{ slug: state.slug }}
                      className="transition-colors hover:text-accent"
                    >
                      {state.name}
                    </Link>
                  </h3>
                  <span className="eyebrow text-muted-foreground">{state.epithet}</span>
                </div>
                <p className="mt-2 font-serif text-base leading-relaxed text-muted-foreground">
                  {items
                    .slice(0, 4)
                    .map((i) => i.title)
                    .join(" · ")}
                </p>
                <Link
                  to="/states/$slug"
                  params={{ slug: state.slug }}
                  className="eyebrow mt-4 inline-block text-accent"
                >
                  Read {state.cities.length} cities →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function Seal() {
  return (
    <svg viewBox="0 0 220 220" className="h-56 w-56" aria-hidden>
      <circle
        cx="110"
        cy="110"
        r="104"
        fill="none"
        stroke="var(--gold)"
        strokeWidth="1"
        opacity="0.7"
      />
      <circle cx="110" cy="110" r="88" fill="none" stroke="var(--gold)" strokeWidth="2" />
      {Array.from({ length: 24 }).map((_, i) => (
        <line
          key={i}
          x1="110"
          y1="110"
          x2="110"
          y2="22"
          stroke="var(--gold)"
          strokeWidth="1"
          opacity="0.45"
          transform={`rotate(${i * 15} 110 110)`}
        />
      ))}
      <circle cx="110" cy="110" r="54" fill="var(--maroon)" stroke="var(--gold)" strokeWidth="2" />
      <text
        x="110"
        y="124"
        textAnchor="middle"
        style={{ fontFamily: "var(--font-display)", fontSize: 44, fill: "var(--gold)" }}
      >
        वि
      </text>
    </svg>
  );
}
