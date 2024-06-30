import { Skeleton } from '@/components/ui/skeleton';
import React from 'react';

const loading = () => {
  return (
    <div className="home">
      <div className="w-[100%] pt-[45px] ps-[30px]  pe-8 ">
        <Skeleton className="block w-[25%] h-[30px] rounded-3 bg-slate-300 mb-4" />
        <Skeleton className="block w-[50%] h-[15px] rounded-3 bg-slate-300 mb-5" />
        <Skeleton className="block w-[30%] h-[30px] rounded-3 bg-slate-300 mb-4" />
        <div className=" flex w-[100%]  flex-row flex-wrap gap-x-2 gap-y-4">
          {[0, 1, 2, 3, 4, 5].map((item: number) => (
            <div key={item} className="lg:w-[30%] w-[100%]">
              <Skeleton className="  col  h-[170px] rounded-3 bg-slate-300 " />
              <div className="flex mt-2">
                <Skeleton className=" w-[25%] h-[30px] rounded-3 bg-slate-300 " />
                <Skeleton className=" w-[25px] h-[30px] rounded-3 bg-slate-300 ms-auto" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default loading;
