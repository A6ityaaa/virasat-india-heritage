import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { STATES, type State } from "@/data/heritage";

const KEY = "virasat.content.v1";

type Ctx = {
  states: State[];
  hydrated: boolean;
  saveState: (slug: string, next: State) => void;
  resetAll: () => void;
};

const ContentContext = createContext<Ctx | null>(null);

export function ContentProvider({ children }: { children: ReactNode }) {
  const [states, setStates] = useState<State[]>(STATES);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as State[];
        if (Array.isArray(parsed) && parsed.length) setStates(parsed);
      }
    } catch {
      /* ignore corrupt storage */
    }
    setHydrated(true);
  }, []);

  const persist = useCallback((next: State[]) => {
    setStates(next);
    try {
      window.localStorage.setItem(KEY, JSON.stringify(next));
    } catch {
      /* ignore quota errors */
    }
  }, []);

  const saveState = useCallback(
    (slug: string, next: State) => {
      persist(states.map((s) => (s.slug === slug ? next : s)));
    },
    [persist, states],
  );

  const resetAll = useCallback(() => {
    try {
      window.localStorage.removeItem(KEY);
    } catch {
      /* noop */
    }
    setStates(STATES);
  }, []);

  const value = useMemo(
    () => ({ states, hydrated, saveState, resetAll }),
    [states, hydrated, saveState, resetAll],
  );

  return <ContentContext.Provider value={value}>{children}</ContentContext.Provider>;
}

export function useContent() {
  const ctx = useContext(ContentContext);
  if (!ctx) throw new Error("useContent must be used inside ContentProvider");
  return ctx;
}
