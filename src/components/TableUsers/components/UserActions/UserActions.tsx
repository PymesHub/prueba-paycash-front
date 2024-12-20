import { Tooltip } from "@nextui-org/tooltip";
import { MdDelete, MdEdit } from "react-icons/md";

const UserActions: React.FC<{
  onOpen: () => void;
  onOpenDelete: () => void;
}> = ({ onOpen, onOpenDelete }) => {
  return (
    <div className="flex gap-2">
      <Tooltip color="foreground" content="Edita los datos del usuario actual">
        <div className="cursor-pointer" onClickCapture={() => onOpen()}>
          <MdEdit opacity={0.5} size={23} />
        </div>
      </Tooltip>
      <Tooltip color="danger" content="Elimina el usuario actual">
        <div className="cursor-pointer">
          <MdDelete opacity={0.5} size={23} onClick={onOpenDelete} />
        </div>
      </Tooltip>
    </div>
  );
};

export default UserActions;
