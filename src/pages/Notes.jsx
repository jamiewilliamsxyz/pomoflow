import { useState, useEffect } from "react";
import { PageLayout } from "../components/PageLayout";
import { NoteList } from "../components/NoteList";
import { Note } from "../components/Note";

export const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [selectedNoteId, setSelectedNoteId] = useState(null);

  const selectedNote = notes.find((note) => note.id === selectedNoteId);

  useEffect(() => {
    chrome.storage.sync.get(["notesData"]).then((result) => {
      setNotes(result.notesData || []);
    });
  }, []);

  return (
    <PageLayout>
      {editMode ? (
        <Note
          selectedNote={selectedNote}
          setEditMode={setEditMode}
          setNotes={setNotes}
          notes={notes}
        />
      ) : (
        <NoteList
          notes={notes}
          setNotes={setNotes}
          editMode={editMode}
          setEditMode={setEditMode}
          setSelectedNoteId={setSelectedNoteId}
        />
      )}
    </PageLayout>
  );
};
