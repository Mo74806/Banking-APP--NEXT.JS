'use client';

import Image from 'next/image';
import { useSearchParams, useRouter } from 'next/navigation';
import { useState } from 'react';

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger } from '@/components/ui/select';
import { formUrlQuery, formatAmount } from '@/lib/utils';

export const NormalDropdown = ({ options = [], placeholder }: { options: string[]; placeholder: string }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [selected, setSeclected] = useState('');

  const handleOptionChange = () => {};

  return (
    <Select defaultValue={selected ? selected : undefined} onValueChange={() => {}}>
      <SelectTrigger className={`flex w-full bg-white gap-3 md:w-[300px] `}>
        <p className="line-clamp-1 w-full text-left">{selected}</p>
      </SelectTrigger>
      <SelectContent className={`w-full bg-white md:w-[300px] `} align="end">
        <SelectGroup>
          <SelectLabel className="py-2 font-normal text-gray-500">{placeholder}</SelectLabel>
          {options.map((item: string, key: number) => (
            <SelectItem key={key} value={item} className="cursor-pointer border-t">
              <div className="flex flex-col ">
                <p className="text-16 font-medium">{item}</p>
              </div>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
