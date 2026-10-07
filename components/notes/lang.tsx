"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { UI } from "@/lib/notes-tr-data";
import { cn } from "@/lib/utils";

export type Lang = "en" | "tr" | "both";

const STORAGE_KEY = "ielts-w2:notes-lang";
const isLang = (v: unknown): v is Lang => v === "en" || v === "tr" || v === "both";

const LangContext = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({
  lang: "en",
  setLang: () => {},
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  // Read the saved choice on the client only, after hydration.
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      // eslint-disable-next-line react-hooks/set-state-in-effect
      if (isLang(saved)) setLangState(saved);
    } catch {
      /* storage unavailable: stay on English */
    }
  }, []);

  function setLang(next: Lang) {
    setLangState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
  }

  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
}

export function useLang() {
  return useContext(LangContext);
}

/** Renders English, Turkish, or both (English first, Turkish beneath) depending on the chosen language. */
export function Tx({ en, tr }: { en: string; tr?: string }) {
  const { lang } = useLang();
  if (!tr || lang === "en") return <>{en}</>;
  if (lang === "tr") return <>{tr}</>;
  return (
    <>
      <span>{en}</span>
      <span className="mt-0.5 block text-[0.92em] font-normal text-slate-500">{tr}</span>
    </>
  );
}

const OPTIONS: { value: Lang; label: string }[] = [
  { value: "en", label: "English" },
  { value: "tr", label: "Türkçe" },
  { value: "both", label: "EN + TR" },
];

export function LangToggle() {
  const { lang, setLang } = useLang();
  return (
    <div
      role="group"
      aria-label={lang === "tr" ? UI.language.tr : UI.language.en}
      className="inline-flex rounded-full border border-border bg-slate-100 p-1"
    >
      {OPTIONS.map((o) => {
        const active = lang === o.value;
        return (
          <button
            key={o.value}
            type="button"
            aria-pressed={active}
            onClick={() => setLang(o.value)}
            className={cn(
              "rounded-full px-4 py-1.5 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-teal",
              active ? "bg-white text-slate-900 shadow-sm" : "text-slate-600 hover:text-slate-900",
            )}
          >
            {o.label}
          </button>
        );
      })}
    </div>
  );
}
