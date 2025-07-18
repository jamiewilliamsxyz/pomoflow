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
      <div className="w-[320px] bg-base-200 p-4 rounded-lg shadow-sm">
        <textarea
          onChange={(e) => setUserNotes(e.target.value)}
          value={userNotes}
          placeholder="Notes"
          className="textarea textarea-md resize-none h-96 focus:outline-0 rounded-lg"
        />
      </div>

      <Button onClick={handleSave}>Save</Button>
    </PageLayout>
  );
};
