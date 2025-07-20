export const NoteCard = ({ noteTitle }) => {
  return (
    <div className="flex items-center bg-base-200 p-2 rounded-lg shadow-sm">
      {/* Default title needs to be "Untitled" */}
      <h2>{noteTitle}</h2>
      {/* Add delete and edit button icons, lucide chart, use taskItem styling for the div */}
    </div>
  );
};
