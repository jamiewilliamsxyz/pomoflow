import { useState, useEffect } from "react";
import { PageLayout } from "../components/PageLayout";
import { Button } from "../components/ui/Button";

export const Notes = () => {
  // Notes Logic
  const [noteContent, setNoteContent] = useState("");

  useEffect(() => {
    chrome.storage.local.get(["userNotes"]).then((result) => {
      setNoteContent(result.userNotes || "");
    });
  }, []);

  const handleSave = () => {
    chrome.storage.local.set({ userNotes: noteContent });
  };

  return (
    <PageLayout pageTitle="Notes">
      <textarea
        onChange={(e) => setNoteContent(e.target.value)}
        value={noteContent}
        placeholder="Notes"
        className="textarea resize-none w-full h-80 focus:outline-0"
      />
      <Button onClick={handleSave}>Save</Button>
    </PageLayout>
  );
};
