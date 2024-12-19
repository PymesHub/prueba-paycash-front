import { MdDelete, MdEdit } from "react-icons/md";

const UserActions: React.FC<{
  onOpen: () => void;
  onOpenDelete: () => void;
}> = ({ onOpen, onOpenDelete }) => {
  return (
    <div className="flex gap-2">
      <div className="cursor-pointer" onClickCapture={() => onOpen()}>
        <MdEdit size={22} />
      </div>
      <div className="cursor-pointer">
        <MdDelete size={22} onClick={onOpenDelete} />
      </div>
    </div>
  );
};

export default UserActions;
