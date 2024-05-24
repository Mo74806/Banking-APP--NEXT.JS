import React from 'react'
import { FormControl, FormField, FormLabel, FormMessage } from './ui/form'
import { Input } from './ui/input'
import { Control, FieldPath } from 'react-hook-form'
import { z, ZodSchema } from 'zod'

interface CustomInputProps<T extends ZodSchema> {
  schema: T,
  control: Control<z.infer<T>>,
  name: FieldPath<z.infer<T>>,
  label: string,
  placeholder: string
}

const CustomInput = <T extends ZodSchema>({ schema, control, name, label, placeholder }: CustomInputProps<T>) => {

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className="form-item">
          <FormLabel className="form-label">
            {label}
          </FormLabel>
          <div className="flex w-full flex-col">
            <FormControl>
              <Input 
                placeholder={placeholder}
                className="input-class"
                type={name === 'password' ? 'password' : 'text'}
                {...field}
              />
            </FormControl>
            <FormMessage className="form-message mt-2" />
          </div>
        </div>
      )}
    />
  )
}

export default CustomInput