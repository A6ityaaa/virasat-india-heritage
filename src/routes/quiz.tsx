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
  component: Quiz;
});

function Quiz() {
  return null;
}
