"use client";
import { Input } from "@nextui-org/input";
import { ChangeEvent, useEffect } from "react";
import { useFormContext } from "react-hook-form";

interface InputFormProps {
  type?: "password" | "email" | "number" | "text";
  classNames?: object;
  label?: string;
  limit?: number;
  errorMessage?: string;
  icon?: React.ReactNode;
  endContent?: React.ReactNode;
  placeholder?: string;
  name?: string;
  handleDirty?: (value: ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  error?: { isCustom: boolean; message: string };
}

const InputForm: React.FC<InputFormProps> = ({
  error,
  label,
  name = "test",
  limit,
  handleDirty,
  errorMessage = "Ingresa el nombre de tu negocio",
  type = "text",
  required = true,
  placeholder = "Test",
  icon,
}) => {
  const {
    register,
    formState: { errors, dirtyFields },
    setError,
  } = useFormContext();

  const validateLength = () => {
    if (limit && limit > 0) {
      return {
        maxLength: {
          value: limit,
          message: `Introduce solo ${limit} caracteres`,
        },
        minLength: {
          value: limit,
          message: `Introduce mínimo ${limit} caracteres`,
        },
      };
    }

    return {};
  };

  const validateEmail = () => {
    if (type === "email") {
      return {
        pattern: {
          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          message: "El formato del correo electrónico no es válido",
        },
      };
    }

    return {};
  };

  const rules = {
    required: {
      value: required,
      message: errorMessage ?? "",
    },
    ...validateLength(),
    ...validateEmail(),
  };

  useEffect(() => {
    if (dirtyFields[name]) {
      if (error?.isCustom) {
        setError(name, { message: error?.message ?? "" });
      }
    }
  }, [dirtyFields, name, error, setError]);

  const registerInput = register(name, {
    ...rules,
    onChange: (value: ChangeEvent<HTMLInputElement>) => {
      if (dirtyFields[name]) {
        if (handleDirty) {
          handleDirty(value);
        }
      }
    },
  });

  return (
    <Input
      {...registerInput}
      className="mb-1"
      classNames={{
        inputWrapper: ["min-h-[50px] xl:min-h-[50px] 2xl:min-h-[50px]"],
      }}
      endContent={
        icon ? (
          <div className="h-full flex items-center justify-center">{icon}</div>
        ) : (
          <></>
        )
      }
      errorMessage={errors[name] && String(errors[name]?.message)}
      isInvalid={errors[name] ? true : false}
      label={label}
      labelPlacement="inside"
      placeholder={placeholder}
      variant="bordered"
    />
  );
};

export default InputForm;
