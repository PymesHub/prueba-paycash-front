"use client";
import { Button } from "@nextui-org/button";
import { useDisclosure } from "@nextui-org/modal";
import { IoIosAdd } from "react-icons/io";

import ModalUser from "../ModalUser/ModalUser";

const Actions = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <div className="w-full lg:order-2 flex items-end justify-start lg:justify-end">
        <Button
          color="primary"
          radius="sm"
          onPress={() => {
            onOpen();
          }}
        >
          <IoIosAdd size={28} />
          Añadir usuario
        </Button>
      </div>

      <ModalUser
        isOpen={isOpen}
        title="Crear nuevo usuario"
        onOpenChange={() => onOpenChange()}
      />
    </>
  );
};

export default Actions;
