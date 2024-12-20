import { UserModel } from "@/src/domain/models/User.model";
import { keyToValueGenre } from "@/src/utils/genreArray";

const GenreInfo: React.FC<{ user: UserModel }> = ({ user }) => {
  return (
    <div className="flex flex-col gap-1">
      <p className="text-bold text-xs lg:text-sm capitalize text-default-400">
        {keyToValueGenre(user.genre)}
      </p>
    </div>
  );
};

export default GenreInfo;
