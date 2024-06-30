import { Skeleton } from '@/components/ui/skeleton';
import React from 'react';

const loading = () => {
  return (
    <div className="payment-transfer">
      <Skeleton className="block w-[25%] h-[30px] rounded-3 bg-slate-300 mb-4" />
      <Skeleton className="block w-[50%] h-[15px] rounded-3 bg-slate-300 mb-5" />
      <Skeleton className="block w-[100%] h-[5px] rounded-3 bg-slate-300 mb-4" />
      {[0, 1, 2, 3, 4, 5].map((item) => (
        <div key={item} className=" block    gap-2">
          <div className=" flex">
            <div className="w-[30%] flex flex-col ">
              <Skeleton className=" w-[60%] h-[25px] rounded-3 bg-slate-300 mb-4" />
              <Skeleton className=" w-[80%] h-[15px] rounded-3 bg-slate-300 mb-4" />
            </div>
            <div className="w-[60%]  ms-auto flex">
              <Skeleton className="block w-[75%] h-[50px] rounded-3 bg-slate-300 mb-4" />
            </div>
          </div>
          <Skeleton className="block w-[100%] h-[5px] rounded-3 bg-slate-300 mb-4" />
        </div>
      ))}
      <div className="w-[100%]  justify-center flex">
        <Skeleton className="block w-[98%] pt-3 h-[50px] rounded-3 bg-slate-300 mb-4" />
      </div>
    </div>
  );
};

export default loading;
