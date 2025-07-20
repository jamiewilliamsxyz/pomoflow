import { useState } from "react";
import { PageLayout } from "../components/PageLayout";
import { Button } from "../components/ui/Button";
import { NoteCard } from "../components/NoteCard";

export const Notes = () => {
  const [notes, setNotes] = useState([
    { id: 1, noteTitle: "Work Notes", noteContent: "work notes content test" },
  ]);

  // See DaisyUI components, maybe use lists

  return (
    <PageLayout>
      <div className="flex flex-col gap-2 max-h-96 overflow-y-auto pb-0.5">
        {notes.map((note) => (
          <NoteCard key={note.id} noteTitle={note.noteTitle} />
        ))}
      </div>
      <Button onClick={createTask}>Create</Button>
    </PageLayout>
  );
};
