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
    const id = setInterval(() => saveRef.current(valueRef.current), intervalMs);
    return () => clearInterval(id);
  }, [intervalMs]);
}
