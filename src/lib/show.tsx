import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";

export type Verdict = { score: number | null; done: boolean };

type ShowState = {
  scores: Record<string, Verdict>;
  askingId: string | null;
  ask: (id: string) => void;
  record: (id: string, score: number | null) => void;
  close: () => void;
};

const Ctx = createContext<ShowState | null>(null);

export function ShowProvider({ children }: { children: ReactNode }) {
  const [scores, setScores] = useState<Record<string, Verdict>>({});
  const [askingId, setAskingId] = useState<string | null>(null);

  const ask = useCallback((id: string) => {
    setScores((prev) => (prev[id]?.done ? prev : prev));
    setAskingId((cur) => cur ?? id);
  }, []);

  const record = useCallback((id: string, score: number | null) => {
    setScores((prev) => (prev[id]?.done ? prev : { ...prev, [id]: { score, done: true } }));
    setAskingId((cur) => (cur === id ? null : cur));
  }, []);

  const close = useCallback(() => setAskingId(null), []);

  const value = useMemo(
    () => ({ scores, askingId, ask, record, close }),
    [scores, askingId, ask, record, close],
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useShow() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useShow must be used inside ShowProvider");
  return ctx;
}

/** Average of the scores actually given, or null when nothing was scored. */
export function averageOf(scores: Record<string, Verdict>) {
  const given = Object.values(scores)
    .map((v) => v.score)
    .filter((s): s is number => typeof s === "number");
  if (!given.length) return null;
  return given.reduce((a, b) => a + b, 0) / given.length;
}
