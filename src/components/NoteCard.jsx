import { Trash, SquarePen } from "lucide-react";

export const NoteCard = ({ noteTitle, onEdit, onRemove, id }) => {
  const handleEdit = () => {
    onEdit(id);
  };

  const handleRemove = () => {
    onRemove(id);
  };

  return (
    <li className="list-row flex flex-row p-3 justify-between items-center">
      <h2 className="font-medium text-lg">{noteTitle}</h2>

      <div className="flex flex-row">
        <button
          onClick={handleEdit}
          className="btn btn-square btn-ghost btn-sm"
        >
          <SquarePen className="w-5 h-5 text-success" />
        </button>

        <button
          onClick={handleRemove}
          className="btn btn-square btn-ghost btn-sm"
        >
          <Trash className="w-5 h-5 text-error" />
        </button>
      </div>
    </li>
  );
};
