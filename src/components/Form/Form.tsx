'use client';
/* eslint-disable @typescript-eslint/no-explicit-any */
import { TypeWithKey } from '@/utils/TypeWithKey';
import React, { useEffect, useRef } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

export interface FormInterface {
  className?: string;
  children: React.ReactNode;
  onSubmit(data: TypeWithKey<any>): void;
  id?: string;
  updateValues?: TypeWithKey<any>;
  defaultValues: object;
  handleGetValues?: (data: any) => void;
}
function deepEqual(obj1: any, obj2: any): boolean {
  if (obj1 === obj2) {
    return true;
  }
  if (
    typeof obj1 !== 'object' ||
    typeof obj2 !== 'object' ||
    obj1 == null ||
    obj2 == null
  ) {
    return false;
  }

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
      return false;
    }
  }

  return true;
}

const Form: React.FC<FormInterface> = ({
  className,
  children,
  defaultValues,
  onSubmit,
  handleGetValues,
  id,
}) => {
  const methods = useForm({ mode: 'all', defaultValues: defaultValues });
  const { handleSubmit, watch } = methods;

  const values = watch();
  const prevValues = useRef(values);

  useEffect(() => {
    if (!deepEqual(values, prevValues.current)) {
      if (handleGetValues) {
        handleGetValues(values);
      }
      prevValues.current = values;
    }
  }, [values, handleGetValues]);

  return (
    <FormProvider {...methods}>
      <form className={className} id={id} onSubmit={handleSubmit(onSubmit)}>
        {children}
      </form>
    </FormProvider>
  );
};

export default Form;
