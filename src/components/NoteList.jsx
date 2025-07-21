import { DefaultButton } from "../components/ui/DefaultButton";
import { NoteCard } from "../components/NoteCard";

export const NoteList = ({
  notes,
  setNotes,
  setEditMode,
  setSelectedNoteId,
}) => {
  const createNote = () => {
    const maxId = notes.length > 0 ? Math.max(...notes.map((n) => n.id)) : 0;
    const newId = maxId + 1;

    setNotes([...notes, { id: newId, title: "Untitled", content: "" }]);
  };

  const editNote = (id) => {
    setSelectedNoteId(id);
    setEditMode(true);
  };

  const removeNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);

    setNotes(updatedNotes);
    chrome.storage.sync.set({ notesData: updatedNotes });
  };

  return (
    <>
      <ul className="w-[320px] list bg-base-200 rounded-box shadow-md max-h-80 overflow-y-auto">
        {notes.map((note) => (
          <NoteCard
            key={note.id}
            id={note.id}
            noteTitle={note.title}
            onRemove={removeNote}
            onEdit={editNote}
          />
        ))}
      </ul>
      <DefaultButton onClick={createNote}>Create</DefaultButton>
    </>
  );
};
