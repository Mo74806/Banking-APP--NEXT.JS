import React from 'react';
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from './ui/form';
import { Input } from './ui/input';
import { Control, FieldPath } from 'react-hook-form';
import { z, ZodSchema } from 'zod';
import { BankDropdown } from './BankDropdown';
import { NormalDropdown } from './NormalDropdown';

interface CustomInputProps<T extends ZodSchema> {
  schema: T;
  control: Control<z.infer<T>>;
  name: FieldPath<z.infer<T>>;
  label: string;
  placeholder?: string;
  form: any;
  subText?: string;
  normalOptions?: string[];
  bankOptions?: any;
  type: 'normalOptions' | 'bankOptions';
}

const CustomDropDown = <T extends ZodSchema>({
  form,
  control,
  name,
  label,
  placeholder,
  subText,
  bankOptions = [],
  normalOptions = [],
  type,
}: CustomInputProps<T>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={() => (
        <FormItem className="border-t border-gray-200">
          <div className="payment-transfer_form-item pb-6 pt-5">
            <div className="payment-transfer_form-content  ">
              <FormLabel className="text-14 font-medium text-gray-700">{label}</FormLabel>
              <FormDescription className="text-12 font-normal text-gray-600">{subText}</FormDescription>
            </div>
            <div className="flex w-full flex-col">
              <FormControl>
                {
                  type === 'bankOptions' ? <BankDropdown accounts={bankOptions} setValue={form.setValue} otherStyles="!w-full" /> : null
                  // <NormalDropdown placeholder={placeholder || ''} options={normalOptions} />
                }{' '}
              </FormControl>
              <FormMessage className="text-12 text-red-500" />
            </div>
          </div>
        </FormItem>
      )}
    />
  );
};

export default CustomDropDown;
