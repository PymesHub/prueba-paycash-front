import { User } from '@nextui-org/user';

interface UserProps {
  name: string;
  email: string;
}

const UserAvatar: React.FC<UserProps> = ({ name, email }) => {
  return (
    <User
      avatarProps={{
        name: name.split('')[0],
      }}
      name={name}
      description={<p> {email} </p>}
    />
  );
};

export default UserAvatar;
