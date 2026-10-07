import { NotesBrowser } from "@/components/notes/notes-browser";

export default function NotesPage() {
  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">Essay Type Notes</h1>
        <p className="text-slate-600">The five Task 2 question types and how to structure each one.</p>
      </header>
      <NotesBrowser />
    </div>
  );
}
