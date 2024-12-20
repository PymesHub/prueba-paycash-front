"use client";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/table";
import { useCallback, useReducer } from "react";
import { useDisclosure } from "@nextui-org/modal";
import useSWR from "swr";

import NotRegistry from "../NotRegistry/NotRegistry";
import ModalDeleteUser from "../ModalDeleteUser/ModalDeleteUser";
import ServerError from "../ServerError/ServerError";

import UserAvatar from "./components/UserAvatar/UserAvatar";
import { columns } from "./utils/columns";
import { PldStatus } from "./components/PldStatus/PldStatus";
import UserActions from "./components/UserActions/UserActions";
import BirthdayDetail from "./components/BirthdayDetail/BirthdayDetail";
import GenreInfo from "./components/GenreInfo/GenreInfo";
import TableSkeleton from "./TableSkeleton/TableSkeleton";

import { UserModel } from "@/src/domain/models/User.model";
import { initialState, reducer } from "@/src/reducer/reducer";
import ModalUpdateUser from "@/ModalUpdateUser";
import { fetcher } from "@/src/utils/fetcher";

const TableUsers = () => {
  const {
    isOpen: isOpenUpdate,
    onOpen: onOpenUpdate,
    onOpenChange: onOpenChangeUpdate,
  } = useDisclosure();
  const {
    isOpen: isOpenDelete,
    onOpen: onOpenDelete,
    onOpenChange: onOpenChangeDelete,
  } = useDisclosure();
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleUpdate = (userModel: UserModel) => {
    dispatch({ type: "UPDATE_USER", payload: userModel });
  };

  const handleDelete = (id: string) => {
    dispatch({ type: "DELETE_USER", payload: { id } });
  };

  const renderCell = useCallback(
    (user: UserModel, columnKey: keyof UserModel) => {
      switch (columnKey) {
        case "genre":
          return <GenreInfo user={user} />;
        case "name":
          return (
            <UserAvatar
              email={user.email}
              name={`${user.name} ${user.lastName}`}
            />
          );
        case "statusPLD":
          return <PldStatus user={user} />;
        case "actions":
          return (
            <UserActions
              onOpen={() => {
                onOpenUpdate();
                handleUpdate(user);
              }}
              onOpenDelete={() => {
                onOpenDelete();
                handleDelete(user?.id ?? "");
              }}
            />
          );
        case "birthday":
          return <BirthdayDetail user={user} />;
      }
    },
    [],
  );
  const { data, isLoading, error } = useSWR("/v1/get-users", fetcher, {
    revalidateOnFocus: true,
    refreshInterval: 10000,
  });

  return (
    <>
      {!isLoading && error && <ServerError />}
      {isLoading && <TableSkeleton />}
      {!error && !isLoading && data?.data.length > 0 ? (
        <Table aria-label="Example static collection table">
          <TableHeader columns={columns}>
            {(column: { id: string; uid: string; name: string }) => (
              <TableColumn key={column.id}>
                <p className="text-sm">{column.name} </p>
              </TableColumn>
            )}
          </TableHeader>
          <TableBody items={data?.data as UserModel[]}>
            {(item) => (
              <TableRow key={item.id}>
                {(columnKey) => (
                  <TableCell>
                    {renderCell(item, columnKey as keyof UserModel)}
                  </TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
      ) : (
        !isLoading && !error && <NotRegistry />
      )}
      <ModalUpdateUser
        defaultValues={
          state.userModel ?? {
            name: "",
            lastName: "",
            email: "",
            birthday: "",
            genre: "",
          }
        }
        isOpen={isOpenUpdate}
        title="Actualizar Usuario"
        onOpenChange={onOpenChangeUpdate}
      />
      <ModalDeleteUser
        isOpen={isOpenDelete}
        title="Eliminar Usuario"
        userId={state?.id ?? ""}
        onOpenChange={onOpenChangeDelete}
      />
    </>
  );
};

export default TableUsers;
