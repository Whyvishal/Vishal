import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";

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

  const scoresRef = useRef(scores);
  scoresRef.current = scores;

  const ask = useCallback((id: string) => {
    setAskingId((cur) => {
      if (cur !== null) return cur; // another act is already being judged
      if (scoresRef.current[id]?.done) return cur; // already scored or skipped
      return id;
    });
  }, []);

  const record = useCallback((id: string, score: number | null) => {
    setScores((prev) =>
      prev[id]?.done ? prev : { ...prev, [id]: { score, done: true } },
    );
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
