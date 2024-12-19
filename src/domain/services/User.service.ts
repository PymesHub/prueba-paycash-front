import { UserModel } from '../models/User.model';

export interface UserServiceInterface {
  createUser(user: UserModel): Promise<void>;
  updateUser(user: UserModel): Promise<void>;
  deleteUser(id: string): Promise<void>;
}
