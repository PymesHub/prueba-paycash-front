/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Select, SelectItem } from "@nextui-org/select";
import { useFormContext, Controller } from "react-hook-form";

interface SelectFormProps {
  name: string;
  label: string;
  placeholder?: string;
  options: { key: string; label: string }[];
  selectionMode?: "single" | "multiple";
  required?: boolean;
  errorMessage?: string;
}

const SelectForm: React.FC<SelectFormProps> = ({
  name,
  label,
  placeholder = "Select an option",
  options,
  required = false,
  errorMessage = "This field is required",
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="flex flex-col gap-2">
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <>
            <Select
              errorMessage={errors[name] && String(errors[name]?.message)}
              isInvalid={errors[name] ? true : false}
              label={label}
              placeholder={placeholder}
              selectedKeys={[field.value]}
              variant="bordered"
              onChange={(e) => {
                field.onChange(e.target.value);
              }}
            >
              {options.map((option) => (
                <SelectItem key={option.key}>{option.label}</SelectItem>
              ))}
            </Select>
          </>
        )}
        rules={{
          required: required
            ? { value: true, message: errorMessage }
            : undefined,
        }}
      />
    </div>
  );
};

export default SelectForm;
