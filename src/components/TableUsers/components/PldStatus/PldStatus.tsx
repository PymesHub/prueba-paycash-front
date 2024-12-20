import { Chip } from "@nextui-org/chip";
import { Tooltip } from "@nextui-org/tooltip";

import { UserModel } from "@/src/domain/models/User.model";
import { keyToValuePLD } from "@/src/utils/pldStatusArray";

const statusColorMap: {
  [key: string]:
    | "danger"
    | "success"
    | "default"
    | "primary"
    | "secondary"
    | "warning";
} = {
  highRisk: "danger",
  cleanPerson: "success",
  waiting: "default",
};

const PldStatus: React.FC<{ user: UserModel }> = ({ user }) => {
  return (
    <div className="flex items-center lg:items-start flex-col gap-1">
      <Tooltip
        color="default"
        content="El status PLD es un flujo que nos permite prevenir el lavado de dinero"
      >
        <Chip
          className="capitalize cursor-pointer"
          color={statusColorMap[user.statusPLD ?? "default"]}
          size="md"
          variant="flat"
        >
          <span className="text-xs lg:text-sm">
            {user.statusPLD === "waiting" ? (
              <span className="opacity-50">En validación</span>
            ) : (
              keyToValuePLD(user.statusPLD ?? "")
            )}
          </span>
        </Chip>
      </Tooltip>
    </div>
  );
};

export { PldStatus };
