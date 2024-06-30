import { Skeleton } from '@/components/ui/skeleton';
import React from 'react';

const loading = () => {
  return (
    <div className="home">
      <div className=" w-[100%] pt-[45px] ps-[30px]  pe-8 ">
        <Skeleton className="block w-[25%] h-[30px] rounded-3 bg-slate-300 mb-4" />
        <Skeleton className="block w-[50%] h-[15px] rounded-3 bg-slate-300 mb-5" />
        <Skeleton className="block w-[100%] h-[150px] rounded-3 bg-slate-300 mb-4" />
        <Skeleton className="block w-[25%] h-[20px] rounded-3 bg-slate-300 mb-4" />
        <div className="flex justify-center mb-4">
          <Skeleton className=" w-[25%] h-[50px] rounded-3 bg-slate-300 me-1 " />
          <Skeleton className=" w-[25%] h-[50px] rounded-3 bg-slate-300 ms-1" />
        </div>
        <Skeleton className="block w-[100%] h-[15px] rounded-3 bg-slate-300 mb-2" />
        <Skeleton className="block w-[100%] h-[1px] rounded-3 bg-slate-300 mb-3" />
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((item: number) => (
          <div className="" key={item}>
            <Skeleton className="block w-[100%] h-[10px] rounded-3 bg-slate-300 mb-2" />
            <Skeleton className="block w-[100%] h-[1px] rounded-3 bg-slate-300 mb-2" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default loading;
