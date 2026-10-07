"use client";

import type { ComponentProps, ClipboardEvent, DragEvent, MouseEvent } from "react";
import { cn } from "@/lib/utils";

type Props = ComponentProps<"textarea">;

const block = (e: { preventDefault: () => void }) => e.preventDefault();

/** Exam editor: copy, cut, paste, right-click and drag-drop are all disabled. */
export function GuardedTextarea({ className, onCopy, onCut, onPaste, onContextMenu, onDrop, onDragOver, ...rest }: Props) {
  return (
    <textarea
      spellCheck={false}
      autoComplete="off"
      {...rest}
      className={cn(
        "w-full resize-y rounded-lg border border-border bg-white p-4 text-base leading-relaxed text-slate-900 outline-none focus-visible:border-teal focus-visible:ring-2 focus-visible:ring-teal/30",
        className,
      )}
      onCopy={(e: ClipboardEvent<HTMLTextAreaElement>) => (block(e), onCopy?.(e))}
      onCut={(e: ClipboardEvent<HTMLTextAreaElement>) => (block(e), onCut?.(e))}
      onPaste={(e: ClipboardEvent<HTMLTextAreaElement>) => (block(e), onPaste?.(e))}
      onContextMenu={(e: MouseEvent<HTMLTextAreaElement>) => (block(e), onContextMenu?.(e))}
      onDrop={(e: DragEvent<HTMLTextAreaElement>) => (block(e), onDrop?.(e))}
      onDragOver={(e: DragEvent<HTMLTextAreaElement>) => (block(e), onDragOver?.(e))}
    />
  );
}
