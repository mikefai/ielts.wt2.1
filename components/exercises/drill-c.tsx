"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { CORRECTION_SENTENCE, validateCorrection } from "@/lib/exercises/validators";

export function DrillC() {
  const [text, setText] = useState(CORRECTION_SENTENCE);
  const r = validateCorrection(text);
  const mark = (ok: boolean) => (ok ? "✓" : "✗");

  return (
    <Card>
      <CardHeader>
        <CardTitle>Drill C: Grammar &amp; Lexical Error Correction</CardTitle>
        <CardDescription>This sentence has two errors. Edit it until both are fixed.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <label className="block space-y-2">
          <span className="text-sm font-medium text-slate-700">Rewrite the sentence</span>
          <Input value={text} onChange={(e) => setText(e.target.value)} />
        </label>
        <ul className="space-y-1 text-sm" aria-live="polite">
          <li className={r.modal ? "text-teal" : "text-slate-600"}>{`${mark(r.modal)} Modal verb: "should" + base verb`}</li>
          <li className={r.noun ? "text-teal" : "text-slate-600"}>{`${mark(r.noun)} Uncountable noun: "public transportation"`}</li>
        </ul>
        {r.ok && (
          <div className="space-y-1 text-sm">
            <p className="font-semibold text-teal">All errors corrected</p>
            <p className="text-slate-600">
              Modal verbs take the base form (&quot;should spend&quot;), and &quot;transportation&quot; is uncountable, so it takes no plural -s.
            </p>
          </div>
        )}
        <Button variant="outline" onClick={() => setText(CORRECTION_SENTENCE)}>Reset</Button>
      </CardContent>
    </Card>
  );
}
