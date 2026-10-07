"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { formatClock, isUrgent, remainingMs } from "@/lib/mock-exam/timer";

export function ExamTimer({ startedAt, onExpire }: { startedAt: number; onExpire: () => void }) {
  const [ms, setMs] = useState(() => remainingMs(startedAt, Date.now()));
  const fired = useRef(false);
  const expireRef = useRef(onExpire);

  useEffect(() => {
    expireRef.current = onExpire;
  });

  useEffect(() => {
    // Derive from the wall clock each tick so throttled background tabs stay correct.
    const check = () => {
      const r = remainingMs(startedAt, Date.now());
      if (r <= 0 && !fired.current) {
        fired.current = true;
        expireRef.current();
      }
      return r;
    };
    check();
    const id = setInterval(() => setMs(check()), 1000);
    return () => clearInterval(id);
  }, [startedAt]);

  const urgent = isUrgent(ms);
  return (
    <time
      role="timer"
      aria-label="Time remaining"
      data-urgent={urgent ? "true" : "false"}
      className={cn("font-mono text-2xl font-semibold tabular-nums", urgent ? "text-red-600" : "text-slate-900")}
    >
      {formatClock(ms)}
    </time>
  );
}
