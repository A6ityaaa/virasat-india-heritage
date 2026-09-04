import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { CATEGORIES, type Category, type City, type Highlight, type State } from "@/data/heritage";
import { useContent } from "@/lib/content-store";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Curator's Desk — VIRASAT" },
      {
        name: "description",
        content: "Edit the state and city entries of the VIRASAT heritage atlas.",
      },
      { property: "og:title", content: "Curator's Desk — VIRASAT" },
      {
        property: "og:description",
        content: "Edit the state and city entries of the VIRASAT heritage atlas.",
      },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Admin,
});

const input =
  "mt-2 w-full border border-input bg-card px-3 py-2 font-serif text-base outline-none focus:border-accent";

function Admin() {
  const { states, saveState, resetAll, hydrated } = useContent();
  const [slug, setSlug] = useState(states[0]?.slug ?? "");
  const [draft, setDraft] = useState<State | null>(null);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const found = states.find((s) => s.slug === slug) ?? states[0];
    if (found) setDraft(structuredClone(found));
  }, [slug, states]);

  if (!hydrated || !draft) return null;

  const update = (fn: (d: State) => void) => {
    setDraft((prev) => {
      if (!prev) return prev;
      const next = structuredClone(prev);
      fn(next);
      return next;
    });
    setSaved(false);
  };

  const editCity = (ci: number, fn: (c: City) => void) =>
    update((d) => {
      const c = d.cities[ci];
      if (c) fn(c);
    });

  const editHl = (ci: number, hi: number, fn: (h: Highlight) => void) =>
    editCity(ci, (c) => {
      const h = c.highlights[hi];
      if (h) fn(h);
    });


  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <p className="eyebrow text-accent">Curator's Desk</p>
      <h1 className="mt-3 text-5xl">Edit the atlas</h1>
      <p className="lede mt-3 text-muted-foreground">
        Changes are kept in this browser and appear across the site immediately.
      </p>

      <div className="mt-10 flex flex-wrap items-end gap-4">
        <label className="block">
          <span className="eyebrow text-muted-foreground">State</span>
          <select
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            className={`${input} min-w-56`}
          >
            {states.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.name}
              </option>
            ))}
          </select>
        </label>
        <button
          onClick={() => {
            saveState(draft.slug, draft);
            setSaved(true);
          }}
          className="eyebrow bg-maroon px-6 py-3 text-primary-foreground"
        >
          Save changes
        </button>
        <button
          onClick={resetAll}
          className="eyebrow border border-border px-6 py-3 text-muted-foreground hover:border-accent hover:text-accent"
        >
          Restore originals
        </button>
        {saved && <span className="eyebrow text-accent">Saved</span>}
      </div>

      <section className="mt-12 space-y-6 border border-border bg-card p-6">
        <h2 className="text-3xl">{draft.name}</h2>
        <label className="block">
          <span className="eyebrow text-muted-foreground">Epithet</span>
          <input
            className={input}
            value={draft.epithet}
            onChange={(e) => update((d) => void (d.epithet = e.target.value))}
          />
        </label>
        <label className="block">
          <span className="eyebrow text-muted-foreground">Introduction</span>
          <textarea
            rows={4}
            className={input}
            value={draft.intro}
            onChange={(e) => update((d) => void (d.intro = e.target.value))}
          />
        </label>
      </section>

      {draft.cities.map((city, ci) => (
        <section key={city.id} className="mt-8 space-y-6 border border-border bg-card p-6">
          <div className="grid gap-6 md:grid-cols-2">
            <label className="block">
              <span className="eyebrow text-muted-foreground">City name</span>
              <input
                className={input}
                value={city.name}
                onChange={(e) => editCity(ci, (c) => void (c.name = e.target.value))}
              />
            </label>
            <label className="block">
              <span className="eyebrow text-muted-foreground">Tagline</span>
              <input
                className={input}
                value={city.tagline}
                onChange={(e) => editCity(ci, (c) => void (c.tagline = e.target.value))}
              />
            </label>
          </div>
          <label className="block">
            <span className="eyebrow text-muted-foreground">Local language</span>
            <input
              className={input}
              value={city.language}
              onChange={(e) => editCity(ci, (c) => void (c.language = e.target.value))}
            />
          </label>
          <label className="block">
            <span className="eyebrow text-muted-foreground">Traditional outfits</span>
            <textarea
              rows={3}
              className={input}
              value={city.outfit}
              onChange={(e) => editCity(ci, (c) => void (c.outfit = e.target.value))}
            />
          </label>

          <div className="rule-gold space-y-6 pt-6">
            {city.highlights.map((h, hi) => (
              <div key={h.id} className="grid gap-4 md:grid-cols-[10rem_1fr]">
                <label className="block">
                  <span className="eyebrow text-muted-foreground">Category</span>
                  <select
                    className={input}
                    value={h.category}
                    onChange={(e) =>
                      editHl(ci, hi, (x) => void (x.category = e.target.value as Category))
                    }
                  >
                    {CATEGORIES.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </label>
                <div className="space-y-3">
                  <input
                    className={input}
                    value={h.title}
                    onChange={(e) => editHl(ci, hi, (x) => void (x.title = e.target.value))}
                  />
                  <textarea
                    rows={3}
                    className={input}
                    value={h.blurb}
                    onChange={(e) => editHl(ci, hi, (x) => void (x.blurb = e.target.value))}
                  />
                  <button
                    onClick={() => editCity(ci, (c) => void c.highlights.splice(hi, 1))}
                    className="eyebrow text-destructive"
                  >
                    Remove entry
                  </button>
                </div>
              </div>
            ))}
            <button
              onClick={() =>
                editCity(
                  ci,
                  (c) =>
                    void c.highlights.push({
                      id: `h-${Date.now()}`,
                      category: "Monuments",
                      title: "New highlight",
                      blurb: "",
                    }),
                )
              }
              className="eyebrow border border-border px-5 py-2.5 text-muted-foreground hover:border-accent hover:text-accent"
            >
              + Add highlight
            </button>
          </div>
        </section>
      ))}
    </div>
  );
}

