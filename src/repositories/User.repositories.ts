/* eslint-disable @typescript-eslint/no-explicit-any */

import { errorNotistack } from "../components/Notistack/error";
import { success } from "../components/Notistack/success";
import { UserModel } from "../domain/models/User.model";
import { UserServiceInterface } from "../domain/services/User.service";
import axiosInstance from "../infra/axios/axiosClient";

export class UserRepository implements UserServiceInterface {
  public async createUser(user: UserModel): Promise<void> {
    try {
      await axiosInstance.post("/v1/create-user", {
        name: user.name,
        email: user.email,
        lastName: user.lastName,
        birthday: user.birthday,
        genre: user.genre,
      });
      success(`Usuario creado con éxito`);
    } catch (e: any) {
      errorNotistack(
        `${e?.response?.data?.message} ${JSON.stringify(e?.response?.data.description)}`
      );
    }
  }

  public async updateUser(user: UserModel): Promise<void> {
    try {
      await axiosInstance.put("/v1/update-user", {
        name: user.name,
        email: user.email,
        lastName: user.lastName,
        birthday: user.birthday,
        genre: user.genre,
      });
      success(`Usuario actualizado con éxito`);
    } catch (e: any) {
      errorNotistack(
        `${e?.response?.data?.message} ${JSON.stringify(e?.response?.data.description)}`
      );
    }
  }

  public async deleteUser(id: string): Promise<void> {
    try {
      await axiosInstance.delete("/v1/delete-user/" + id);
      success(`Usuario eliminado con éxito`);
    } catch (e: any) {
      errorNotistack(
        `${e?.response?.data?.message} ${JSON.stringify(e?.response?.data.description)}`
      );
    }
  }
}
