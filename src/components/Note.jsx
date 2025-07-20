import { useState } from "react";
import { Button } from "../components/ui/Button";

export const Note = ({ selectedNote, setEditMode, setNotes, notes }) => {
  const [title, setTitle] = useState(selectedNote.title);
  const [content, setContent] = useState(selectedNote.content);

  const handleSave = () => {
    const updatedNotes = notes.map((note) =>
      note.id === selectedNote.id ? { ...note, title, content } : note
    );

    setNotes(updatedNotes);
    chrome.storage.sync.set({ notesData: updatedNotes });
  };

  return (
    <div className="w-[320px] flex flex-col gap-4 bg-base-200 p-4 rounded-lg shadow-sm">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder="Untitled"
        maxLength="20"
        className="input border-0 focus:outline-0 font-medium text-lg"
      />
      <textarea
        onChange={(e) => setContent(e.target.value)}
        value={content}
        placeholder="Notes"
        className="textarea textarea-md resize-none h-96 border-0 focus:outline-0 rounded-lg"
      />
      <div className="flex flex-row gap-4 justify-center">
        <Button onClick={handleSave} colour="success">
          Save
        </Button>
        <Button onClick={() => setEditMode(false)} colour="warning">
          Back
        </Button>
      </div>
    </div>
  );
};
