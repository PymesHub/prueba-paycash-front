import { User } from "@nextui-org/user";

interface UserProps {
  name: string;
  email: string;
}

const UserAvatar: React.FC<UserProps> = ({ name, email }) => {
  return (
    <User
      avatarProps={{
        src: `https://avatar.iran.liara.run/public/`,
        isBordered: true,
      }}
      description={<p> {email} </p>}
      name={<p className="text-xs lg:text-sm">{name}</p>}
    />
  );
};

export default UserAvatar;
