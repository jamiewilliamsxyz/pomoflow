import { useState } from "react";

export const NoteBox = () => {
  const [userNotes, setUserNotes] = useState("");

  return (
    <textarea
      placeholder="Notes"
      className="textarea resize-none w-full h-80"
      value={userNotes}
      onChange={(e) => {
        setUserNotes(e.target.value);
      }}
    />
  );
};
