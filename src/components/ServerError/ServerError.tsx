"use client";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), {
  ssr: false,
});

import { useDisclosure } from "@nextui-org/modal";

import animation from "../../../public/notUsers.json";
import ModalUser from "../ModalUser/ModalUser";

const ServerError = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="w-full flex flex-col py-6 items-center justify-center">
      <Lottie
        animationData={animation}
        className="w-[250px] h-[250px]"
        loop={true}
      />
      <div className="flex flex-col gap-4 items-center justify-center">
        <h1 className="text-xl"> ¡Estamos experimentando problemas! </h1>
        <p className="text-center">
          Nuestro equipo de desarrolladores trabajaran pronto para solucionar
          este inconveniente
        </p>
      </div>
      <ModalUser
        isOpen={isOpen}
        title="Crear nuevo usuario"
        onOpenChange={() => onOpenChange()}
      />
    </div>
  );
};

export default ServerError;
