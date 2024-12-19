import { UserModel } from "../domain/models/User.model";

export interface State {
  userModel: UserModel | null;
  id: string | null;
}

export type Action =
  | { type: "UPDATE_USER"; payload: UserModel }
  | { type: "DELETE_USER"; payload: { id: string } };
