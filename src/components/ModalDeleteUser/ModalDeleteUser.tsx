"use client";
import { Button } from "@nextui-org/button";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/modal";
import { useState } from "react";
import { useSWRConfig } from "swr";

import { UserRepository } from "@/src/repositories/User.repositories";
interface ModalDeleteUserProps {
  title: string;
  userId: string;
  isOpen: boolean;
  onOpenChange: () => void;
}
const ModalDeleteUser: React.FC<ModalDeleteUserProps> = ({
  title,
  isOpen,
  userId,
  onOpenChange,
}) => {
  const [loading, setLoading] = useState(false);
  const { mutate } = useSWRConfig();
  const userRepo = new UserRepository();
  const onSubmit = async () => {
    try {
      setLoading(true);

      await userRepo.deleteUser(userId);
      mutate("/v1/get-users");
      setLoading(false);
      onOpenChange();
    } catch (_err) {
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      backdrop="blur"
      isDismissable={!loading}
      isOpen={isOpen}
      size="sm"
      onOpenChange={onOpenChange}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
            <ModalBody>
              <div>
                <p> Estas seguro que deseas eliminar al usuario </p>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button
                color="danger"
                isDisabled={loading}
                variant="light"
                onPress={onClose}
              >
                Cerrar
              </Button>
              <Button
                color="primary"
                form="ModalDeleteUser"
                isLoading={loading}
                radius="sm"
                type="submit"
                onPress={onSubmit}
              >
                Eliminar usuario
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default ModalDeleteUser;
