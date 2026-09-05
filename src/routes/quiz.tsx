import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { BADGES, POINTS_PER_CORRECT, QUESTIONS } from "@/data/quiz";
import {
  badgesFor,
  leaderboardWith,
  nextBadge,
  useQuizProgress,
} from "@/lib/quiz-store";

export const Route = createFileRoute("/quiz")({
  head: () => ({
    meta: [
      { title: "Heritage Quiz — VIRASAT" },
      {
        name: "description",
        content:
          "Test your knowledge of India's monuments, festivals, crafts and food. Earn points, unlock badges and climb the leaderboard.",
      },
      { property: "og:title", content: "Heritage Quiz — VIRASAT" },
      {
        property: "og:description",
        content: "Answer questions on India's living heritage, collect badges and rank up.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Quiz,
});

function Quiz() {
  const { progress, hydrated, record, setName, reset } = useQuizProgress();
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [justUnlocked, setJustUnlocked] = useState<string | null>(null);

  const question = QUESTIONS[index];
  const earned = useMemo(() => badgesFor(progress.points), [progress.points]);
  const upcoming = useMemo(() => nextBadge(progress.points), [progress.points]);
  const board = useMemo(() => leaderboardWith(progress), [progress]);

  if (!hydrated || !question) return null;

  const answer = (choice: number) => {
    if (picked !== null) return;
    setPicked(choice);
    const wasCorrect = choice === question.answer;
    if (wasCorrect) {
      const before = badgesFor(progress.points).length;
      const after = badgesFor(progress.points + POINTS_PER_CORRECT);
      if (after.length > before) setJustUnlocked(after[after.length - 1]?.name ?? null);
    }
    record(wasCorrect, POINTS_PER_CORRECT);
  };

  const advance = () => {
    setPicked(null);
    setJustUnlocked(null);
    setIndex((i) => (i + 1) % QUESTIONS.length);
  };

  const startOver = () => {
    reset();
    setIndex(0);
    setPicked(null);
    setJustUnlocked(null);
  };

  const accuracy =
    progress.answered > 0 ? Math.round((progress.correct / progress.answered) * 100) : 0;
  const progressPct = upcoming
    ? Math.min(100, Math.round((progress.points / upcoming.at) * 100))
    : 100;

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <p className="eyebrow text-accent">The Reading Room</p>
      <h1 className="mt-3 text-5xl">Heritage quiz</h1>
      <p className="lede mt-3 max-w-2xl text-muted-foreground">
        Twelve questions on the monuments, festivals, crafts and kitchens of India. Every right
        answer earns {POINTS_PER_CORRECT} points, and milestones unlock curator badges.
      </p>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1.6fr_1fr]">
        <section className="border border-border bg-card p-8">
          <div className="flex items-center justify-between">
            <span className="eyebrow text-muted-foreground">
              Question {index + 1} of {QUESTIONS.length}
            </span>
            <span className="eyebrow text-accent">{question.region}</span>
          </div>

          <h2 className="mt-6 text-3xl leading-snug">{question.prompt}</h2>

          <div className="mt-8 space-y-3">
            {question.options.map((opt, i) => {
              const isAnswer = i === question.answer;
              const chosen = picked === i;
              const revealed = picked !== null;
              const tone = !revealed
                ? "border-border hover:border-accent"
                : isAnswer
                  ? "border-accent bg-accent/10"
                  : chosen
                    ? "border-destructive bg-destructive/10"
                    : "border-border opacity-60";
              return (
                <button
                  key={opt}
                  onClick={() => answer(i)}
                  disabled={revealed}
                  className={`w-full border px-5 py-4 text-left font-serif text-lg transition-colors ${tone}`}
                >
                  <span className="eyebrow mr-3 text-muted-foreground">
                    {String.fromCharCode(65 + i)}
                  </span>
                  {opt}
                </button>
              );
            })}
          </div>

          {picked !== null && (
            <div className="rule-gold mt-8 pt-6">
              <p className="eyebrow text-accent">
                {picked === question.answer ? `Correct · +${POINTS_PER_CORRECT}` : "Not quite"}
              </p>
              <p className="lede mt-3 text-muted-foreground">{question.note}</p>
              {justUnlocked && (
                <p className="eyebrow mt-4 text-accent">Badge unlocked · {justUnlocked}</p>
              )}
              <button
                onClick={advance}
                className="eyebrow mt-6 bg-maroon px-6 py-3 text-primary-foreground"
              >
                {index === QUESTIONS.length - 1 ? "Start the round again" : "Next question"}
              </button>
            </div>
          )}
        </section>

        <aside className="space-y-10">
          <section className="border border-border bg-card p-6">
            <p className="eyebrow text-muted-foreground">Your score</p>
            <p className="mt-2 text-5xl">{progress.points}</p>
            <p className="mt-2 text-sm text-muted-foreground">
              {progress.correct} of {progress.answered} answered correctly · {accuracy}% accuracy
            </p>
            <label className="mt-6 block">
              <span className="eyebrow text-muted-foreground">Name on the leaderboard</span>
              <input
                value={progress.name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="mt-2 w-full border border-input bg-background px-3 py-2 font-serif text-base outline-none focus:border-accent"
              />
            </label>
            <button
              onClick={startOver}
              className="eyebrow mt-4 border border-border px-5 py-2.5 text-muted-foreground hover:border-accent hover:text-accent"
            >
              Reset progress
            </button>
          </section>

          <section className="border border-border bg-card p-6">
            <p className="eyebrow text-muted-foreground">Badges</p>
            {upcoming ? (
              <>
                <div className="mt-4 h-1.5 w-full bg-border">
                  <div className="h-full bg-accent" style={{ width: `${progressPct}%` }} />
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  {upcoming.at - progress.points} points to “{upcoming.name}”
                </p>
              </>
            ) : (
              <p className="mt-4 text-sm text-muted-foreground">Every badge is yours.</p>
            )}
            <ul className="mt-6 space-y-4">
              {BADGES.map((b) => {
                const has = earned.some((e) => e.id === b.id);
                return (
                  <li key={b.id} className={has ? "" : "opacity-50"}>
                    <div className="flex items-baseline justify-between gap-3">
                      <span className="font-serif text-lg">{b.name}</span>
                      <span className="eyebrow text-muted-foreground">{b.at} pts</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {has ? b.blurb : "Locked"}
                    </p>
                  </li>
                );
              })}
            </ul>
          </section>

          <section className="border border-border bg-card p-6">
            <p className="eyebrow text-muted-foreground">Leaderboard</p>
            <ol className="mt-4 space-y-3">
              {board.map((row, i) => (
                <li
                  key={`${row.name}-${i}`}
                  className={`flex items-baseline justify-between gap-3 border-b border-border pb-2 last:border-0 ${
                    row.isYou ? "text-accent" : ""
                  }`}
                >
                  <span className="font-serif text-lg">
                    <span className="eyebrow mr-3 text-muted-foreground">{i + 1}</span>
                    {row.name}
                    {row.isYou && <span className="eyebrow ml-2">you</span>}
                  </span>
                  <span className="font-serif text-lg">{row.points}</span>
                </li>
              ))}
            </ol>
          </section>
        </aside>
      </div>
    </div>
  );
}
