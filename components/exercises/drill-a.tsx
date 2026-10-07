"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { THESIS_MIN_WORDS, validateThesis } from "@/lib/exercises/validators";

export function DrillA() {
  const [text, setText] = useState("");
  const r = validateThesis(text);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Drill A: Thesis Statement Builder</CardTitle>
        <CardDescription>
          Write a one-sentence thesis for this opinion essay. Use a clear position phrase and aim for {THESIS_MIN_WORDS}+ words.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="rounded-lg border border-border bg-slate-50 p-4 font-medium text-slate-800">
          Some people believe that university education should be free for everyone. To what extent do you agree?
        </p>
        <label className="block space-y-2">
          <span className="text-sm font-medium text-slate-700">Your thesis statement</span>
          <Textarea value={text} onChange={(e) => setText(e.target.value)} rows={3} />
        </label>
        <div className="space-y-1 text-sm" aria-live="polite">
          <p className={r.enoughWords ? "text-teal" : "text-slate-600"}>{`Words: ${r.wordCount}/${THESIS_MIN_WORDS}`}</p>
          {text.trim() !== "" && !r.hasPhrase && (
            <p className="text-slate-600">Include &quot;I completely agree because&quot; or &quot;This essay argues that&quot;</p>
          )}
          {r.ok && <p className="font-semibold text-teal">Thesis looks strong</p>}
        </div>
        <Button variant="outline" onClick={() => setText("")}>Reset</Button>
      </CardContent>
    </Card>
  );
}
