import { Chip } from "@nextui-org/chip";

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
    <div className="flex flex-col gap-1">
      <Chip
        className="capitalize"
        color={statusColorMap[user.statusPLD ?? "default"]}
        size="md"
        variant="flat"
      >
        <span>
          {user.statusPLD === "waiting" ? (
            <span className="opacity-50">En validación</span>
          ) : (
            keyToValuePLD(user.statusPLD ?? "")
          )}
        </span>
      </Chip>
    </div>
  );
};

export { PldStatus };
