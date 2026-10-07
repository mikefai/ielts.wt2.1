"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CONNECTOR_OPTIONS, validateConnectors } from "@/lib/exercises/validators";

function Slot({
  label,
  value,
  correct,
  onChange,
}: {
  label: string;
  value: string | null;
  correct: boolean;
  onChange: (v: string | null) => void;
}) {
  return (
    <span className="inline-flex flex-col align-top">
      <select
        aria-label={label}
        value={value ?? ""}
        onChange={(e) => onChange(e.target.value || null)}
        className="h-9 rounded-md border border-border bg-white px-2 text-sm focus-visible:outline-2 focus-visible:outline-teal"
      >
        <option value="">Choose…</option>
        {CONNECTOR_OPTIONS.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
      {value !== null && (
        <span className={`text-xs ${correct ? "text-teal" : "text-red-600"}`}>{correct ? "Correct" : "Try again"}</span>
      )}
    </span>
  );
}

export function DrillB() {
  const [sel, setSel] = useState<{ slot1: string | null; slot2: string | null }>({ slot1: null, slot2: null });
  const r = validateConnectors(sel);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Drill B: Cohesive Device Connector</CardTitle>
        <CardDescription>Pick the linking phrase that best fills each blank.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="flex flex-wrap items-start gap-x-2 gap-y-3 leading-loose text-slate-800">
          <Slot label="Blank 1" value={sel.slot1} correct={r.slot1} onChange={(v) => setSel({ ...sel, slot1: v })} />
          <span>technology has isolated people.</span>
          <Slot label="Blank 2" value={sel.slot2} correct={r.slot2} onChange={(v) => setSel({ ...sel, slot2: v })} />
          <span>it has bridged long-distance relationships.</span>
        </p>
        {r.ok && <p className="font-semibold text-teal" aria-live="polite">Both blanks correct</p>}
        <Button variant="outline" onClick={() => setSel({ slot1: null, slot2: null })}>Reset</Button>
      </CardContent>
    </Card>
  );
}
