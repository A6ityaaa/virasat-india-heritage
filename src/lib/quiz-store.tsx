import { useCallback, useEffect, useState } from "react";
import { BADGES, SEED_LEADERBOARD, type Badge } from "@/data/quiz";

const KEY = "virasat.quiz.v1";

export type QuizProgress = {
  name: string;
  points: number;
  correct: number;
  answered: number;
};

const EMPTY: QuizProgress = { name: "", points: 0, correct: 0, answered: 0 };

export function badgesFor(points: number): Badge[] {
  return BADGES.filter((b) => points >= b.at);
}

export function nextBadge(points: number): Badge | null {
  return BADGES.find((b) => points < b.at) ?? null;
}

export function useQuizProgress() {
  const [progress, setProgress] = useState<QuizProgress>(EMPTY);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(KEY);
      if (raw) setProgress({ ...EMPTY, ...(JSON.parse(raw) as QuizProgress) });
    } catch {
      /* ignore corrupt storage */
    }
    setHydrated(true);
  }, []);

  const persist = useCallback((next: QuizProgress) => {
    setProgress(next);
    try {
      window.localStorage.setItem(KEY, JSON.stringify(next));
    } catch {
      /* ignore quota errors */
    }
  }, []);

  const record = useCallback(
    (wasCorrect: boolean, points: number) => {
      setProgress((prev) => {
        const next: QuizProgress = {
          ...prev,
          answered: prev.answered + 1,
          correct: prev.correct + (wasCorrect ? 1 : 0),
          points: prev.points + (wasCorrect ? points : 0),
        };
        try {
          window.localStorage.setItem(KEY, JSON.stringify(next));
        } catch {
          /* ignore */
        }
        return next;
      });
    },
    [],
  );

  const setName = useCallback(
    (name: string) => persist({ ...progress, name }),
    [persist, progress],
  );

  const reset = useCallback(() => {
    try {
      window.localStorage.removeItem(KEY);
    } catch {
      /* noop */
    }
    setProgress(EMPTY);
  }, []);

  return { progress, hydrated, record, setName, reset };
}

export function leaderboardWith(progress: QuizProgress) {
  const you = {
    name: progress.name.trim() || "You",
    points: progress.points,
    isYou: true,
  };
  const rows = [...SEED_LEADERBOARD.map((r) => ({ ...r, isYou: false })), you];
  return rows.sort((a, b) => b.points - a.points);
}
