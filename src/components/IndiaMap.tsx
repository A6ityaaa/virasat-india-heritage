import { useNavigate } from "@tanstack/react-router";
import { INDIA_OUTLINE, type State } from "@/data/heritage";

type Props = {
  states: State[];
  activeSlugs: string[];
};

export function IndiaMap({ states, activeSlugs }: Props) {
  const navigate = useNavigate();

  return (
    <svg
      viewBox="0 0 600 720"
      role="group"
      aria-label="Map of India with clickable states"
      className="h-auto w-full max-w-[520px]"
    >
      <defs>
        <pattern id="weave" width="8" height="8" patternUnits="userSpaceOnUse">
          <path d="M0,8 L8,0" stroke="var(--gold)" strokeWidth="0.6" opacity="0.35" />
        </pattern>
      </defs>

      <path
        d={INDIA_OUTLINE}
        fill="url(#weave)"
        stroke="var(--gold)"
        strokeWidth="1.6"
        opacity="0.9"
      />

      {states.map((s) => {
        const active = activeSlugs.includes(s.slug);
        return (
          <g
            key={s.slug}
            role="button"
            tabIndex={0}
            aria-label={`Open ${s.name}`}
            className="cursor-pointer outline-none"
            onClick={() => navigate({ to: "/states/$slug", params: { slug: s.slug } })}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                navigate({ to: "/states/$slug", params: { slug: s.slug } });
              }
            }}
          >
            <path
              d={s.shape}
              className="transition-all duration-300"
              fill={active ? "var(--saffron)" : "var(--muted)"}
              fillOpacity={active ? 0.92 : 0.5}
              stroke="var(--maroon)"
              strokeWidth={active ? 2 : 1}
            />
            <text
              x={s.labelAt[0]}
              y={s.labelAt[1]}
              textAnchor="middle"
              className="pointer-events-none select-none"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 13,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                fill: active ? "var(--maroon)" : "var(--muted-foreground)",
              }}
            >
              {s.name}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
