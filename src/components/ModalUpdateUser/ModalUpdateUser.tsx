"use client";
import { Button } from "@nextui-org/button";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/modal";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useDateFormatter } from "@react-aria/i18n";
import { useState } from "react";

import InputForm from "../Input/Input";
import Form from "../Form/Form";
import DatePickerForm from "../DatePickerForm/DatePickerForm";
import SelectForm from "../Select/Select";

import { UserRepository } from "@/src/repositories/User.repositories";
import { UserModel } from "@/src/domain/models/User.model";
interface ModalUpdateUserProps {
  title: string;
  isOpen: boolean;
  onOpenChange: () => void;
  defaultValues: {
    name: string;
    lastName: string;
    email: string;
    birthday: Date;
    genre: string;
    isHighRisk?: boolean;
  };
}
const ModalUpdateUser: React.FC<ModalUpdateUserProps> = ({
  title,
  isOpen,
  onOpenChange,
  defaultValues,
}) => {
  const [loading, setLoading] = useState(false);
  const userRepo = new UserRepository();
  const formatter = useDateFormatter({
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  const onSubmit = async (data: any) => {
    setLoading(true);
    const user = new UserModel(
      null,
      data.name,
      data.lastName,
      data.email,
      formatter.format(data.birthday.toDate()),
      [...data?.genre][0],
    );

    await userRepo.createUser(user);
    setLoading(false);
    onOpenChange();
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
              <Form
                className="flex flex-col gap-4"
                defaultValues={defaultValues}
                id="modalUpdateuser"
                onSubmit={onSubmit}
              >
                <InputForm
                  required
                  icon={<FaUser opacity={0.4} size={16} />}
                  label="Nombre"
                  name="name"
                  placeholder="Ingresa el nombre"
                />
                <InputForm
                  required
                  icon={<FaUser opacity={0.4} size={16} />}
                  label="Apellidos"
                  name="lastName"
                  placeholder="Ingresa los apellidos"
                />
                <InputForm
                  required
                  icon={<MdEmail opacity={0.4} size={18} />}
                  label="Correo electronico"
                  name="email"
                  placeholder="Ingresa un correo electronico"
                  type="email"
                />
                <DatePickerForm
                  required
                  label="Fecha de nacimiento"
                  name="birthday"
                />
                <SelectForm
                  required
                  errorMessage="Campo requerido"
                  label="Genero"
                  name="genre"
                  options={[{ key: "male", label: "Hombre" }]}
                  placeholder="Selecciona su género"
                />
              </Form>
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
                form="modalUpdateuser"
                isLoading={loading}
                radius="sm"
                type="submit"
              >
                Actualizar usuario
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default ModalUpdateUser;
