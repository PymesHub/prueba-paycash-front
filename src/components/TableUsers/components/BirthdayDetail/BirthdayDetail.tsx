import { UserModel } from "@/src/domain/models/User.model";
import { formatDate } from "@/src/utils/formatterDate";

const BirthdayDetail: React.FC<{ user: UserModel }> = ({ user }) => {
  return (
    <div className="flex flex-col gap-1">
      <p className="text-bold text-sm capitalize text-default-400">
        {formatDate(user.birthday)}
      </p>
    </div>
  );
};

export default BirthdayDetail;
