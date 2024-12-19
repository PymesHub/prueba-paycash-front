"use client";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), {
  ssr: false,
});

import { Button } from "@nextui-org/button";
import { useDisclosure } from "@nextui-org/modal";

import animation from "../../../public/notUsers.json";
import ModalUser from "../ModalUser/ModalUser";

const NotRegistry = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="w-full flex flex-col py-6 items-center justify-center">
      <Lottie
        animationData={animation}
        className="w-[250px] h-[250px]"
        loop={true}
      />
      <div className="flex flex-col gap-4 items-center justify-center">
        <h1 className="text-xl"> ¡Aún no existen usuarios! </h1>
        <p className="text-center">
          para añadir un nuevo usuario da click en el boton de abajo{" "}
        </p>
        <Button
          className="w-[250px] h-[45px] text-base font-semibold "
          color="primary"
          radius="sm"
          onPress={onOpen}
        >
          {" "}
          Añade tu primer usuario{" "}
        </Button>
      </div>
      <ModalUser
        isOpen={isOpen}
        title="Crear nuevo usuario"
        onOpenChange={() => onOpenChange()}
      />
    </div>
  );
};

export default NotRegistry;
