import { useState } from "react";
import { Button } from "@nextui-org/button";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/modal";
import { useDateFormatter } from "@react-aria/i18n";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { CalendarDate } from "@internationalized/date";
import { useSWRConfig } from "swr";

import { UserRepository } from "./src/repositories/User.repositories";
import DatePickerForm from "./src/components/DatePickerForm/DatePickerForm";
import InputForm from "./src/components/Input/Input";
import SelectForm from "./src/components/Select/Select";
import { UserModel } from "./src/domain/models/User.model";
import { Form } from "./src/components/Form";
import { genreArray } from "./src/utils/genreArray";

interface ModalUpdateUserProps {
  title: string;
  isOpen: boolean;
  onOpenChange: () => void;
  defaultValues: {
    name: string;
    lastName: string;
    email: string;
    birthday: string | CalendarDate;
    genre: string;
  };
}

const ModalUpdateUser: React.FC<ModalUpdateUserProps> = ({
  title,
  isOpen,
  onOpenChange,
  defaultValues,
}) => {
  const { mutate } = useSWRConfig();
  const [loading, setLoading] = useState(false);
  const userRepo = new UserRepository();
  const formatter = useDateFormatter({
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  const onSubmit = async (data: any) => {
    try {
      setLoading(true);
      const user = new UserModel(
        data.id,
        data.name,
        data.lastName,
        data.email,
        formatter.format(data.birthday.toDate()),
        data.genre,
      );

      await userRepo.updateUser(user);
      mutate("/v1/get-users");
      setLoading(false);
      onOpenChange();
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (_err) {
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      backdrop="blur"
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
                  options={genreArray}
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
