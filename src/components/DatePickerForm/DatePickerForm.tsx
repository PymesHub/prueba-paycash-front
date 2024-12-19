"use client";

import { DatePicker } from "@nextui-org/date-picker";
import { useFormContext, Controller } from "react-hook-form";

interface DatePickerFormProps {
  name: string;
  label?: string;
  errorMessage?: string;
  defaultValue?: string;
  required?: boolean;
  placeholder?: string;
  variant?: "faded" | "bordered";
}

const DatePickerForm: React.FC<DatePickerFormProps> = ({
  name,
  defaultValue,
  label = "Selecciona una fecha",
  errorMessage = "Este campo es requerido",
  required = true,
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <DatePicker
            {...field}
            disableAnimation
            defaultValue={defaultValue}
            errorMessage={errors[name] && String(errors[name]?.message)}
            isInvalid={errors[name] ? true : false}
            label={label}
            value={field.value || null}
            variant="bordered"
            onChange={(date) => field.onChange(date)}
          />
        )}
        rules={{
          required: {
            value: required,
            message: errorMessage,
          },
        }}
      />
    </div>
  );
};

export default DatePickerForm;
