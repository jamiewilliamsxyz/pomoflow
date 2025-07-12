import { useState, useEffect } from "react";
import { PageLayout } from "../components/PageLayout";
import { Button } from "../components/ui/Button";

export const Notes = () => {
  const [userNotes, setUserNotes] = useState("");

  useEffect(() => {
    chrome.storage.local.get(["notesData"]).then((result) => {
      setUserNotes(result.notesData || "");
    });
  }, []);

  const handleSave = () => {
    chrome.storage.local.set({ notesData: userNotes });
  };

  return (
    <PageLayout pageTitle="Notes">
      <textarea
        onChange={(e) => setUserNotes(e.target.value)}
        value={userNotes}
        placeholder="Notes"
        className="textarea resize-none w-full h-80 focus:outline-0"
      />
      <Button onClick={handleSave}>Save</Button>
    </PageLayout>
  );
};
