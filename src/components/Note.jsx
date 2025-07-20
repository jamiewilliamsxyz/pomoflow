import { Button } from "../components/ui/Button";

export const Note = () => {
  const [userNotes, setUserNotes] = useState("");

  useEffect(() => {
    chrome.storage.sync.get(["notesData"]).then((result) => {
      setUserNotes(result.notesData || "");
    });
  }, []);

  const handleSave = () => {
    chrome.storage.sync.set({ notesData: userNotes });
  };

  return (
    <div className="w-[320px] flex flex-col gap-4 bg-base-200 p-4 rounded-lg shadow-sm">
      <input
        type="text"
        placeholder="Title"
        className="input focus:outline-0"
      />
      <textarea
        onChange={(e) => setUserNotes(e.target.value)}
        value={userNotes}
        placeholder="Notes"
        className="textarea textarea-md resize-none h-96 focus:outline-0 rounded-lg"
      />
      <div className="flex flex-col gap-2">
        <Button onClick={handleSave}>Save</Button>
        <LinkButton>Delete</LinkButton>
      </div>
    </div>
  );
};
