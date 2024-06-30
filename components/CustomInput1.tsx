import React from 'react';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form';
import { Input } from './ui/input';
import { Control, FieldPath } from 'react-hook-form';
import { z, ZodSchema } from 'zod';

interface CustomInputProps<T extends ZodSchema> {
  schema: T;
  control: Control<z.infer<T>>;
  name: FieldPath<z.infer<T>>;
  label: string;
  placeholder: string;
}

const CustomInput1 = <T extends ZodSchema>({ control, name, label, placeholder }: CustomInputProps<T>) => {
  return (
    <>
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem className="border-t border-gray-200">
            <div className="payment-transfer_form-item pb-5 pt-6">
              <FormLabel className="text-14 w-full max-w-[280px] font-medium text-gray-700">{label}</FormLabel>
              <div className="flex w-full flex-col">
                <FormControl>
                  <Input placeholder={placeholder} className="input-class" {...field} />
                </FormControl>
                <FormMessage className="text-12 text-red-500" />
              </div>
            </div>
          </FormItem>
        )}
      />
    </>
  );
};

export default CustomInput1;
