"use client";

import { useEffect, useRef } from "react";
import { AUTOSAVE_INTERVAL_MS } from "@/lib/mock-exam/timer";

export function useAutosave(
  value: string,
  save: (value: string) => void,
  intervalMs: number = AUTOSAVE_INTERVAL_MS,
): void {
  const valueRef = useRef(value);
  const saveRef = useRef(save);

  useEffect(() => {
    valueRef.current = value;
    saveRef.current = save;
  });

  useEffect(() => {
    const flush = () => saveRef.current(valueRef.current);
    const id = setInterval(flush, intervalMs);
    // Also flush when the page is reloaded/closed or the tab is hidden, so a reload never loses typing.
    const onVisibility = () => {
      if (document.visibilityState === "hidden") flush();
    };
    window.addEventListener("pagehide", flush);
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      clearInterval(id);
      window.removeEventListener("pagehide", flush);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [intervalMs]);
}
