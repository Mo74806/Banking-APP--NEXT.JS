import { Skeleton } from '@/components/ui/skeleton';
import React from 'react';

const Loading = () => {
  return (
    <div className="home">
      <div className="xl:w-8/12 w-[100%] pt-[45px] ps-[30px]  pe-8 ">
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
      <div className="w-4/12  xl:flex xl:flex-col  hidden   ">
        <Skeleton className="block w-[100%] h-[150px]  bg-slate-300 mb-4" />
        <div className="position-relative relative top-[-50px]  p-0 m-0">
          <Skeleton className="block w-[100px] h-[100px] rounded-full p-0 m-0 ms-[25px] border border-white border-[5px]  bg-slate-300 " />
        </div>
        <Skeleton className="block w-[30%] h-[20px]  bg-slate-300 mb-4" />
        <Skeleton className="block w-[35%] h-[15px]  bg-slate-300 mb-8" />
        <div className="flex mb-[50px] pe-2">
          <Skeleton className=" w-[30%] h-[20px]  bg-slate-300 " />
          <Skeleton className=" w-[30%] h-[20px]  bg-slate-300  ms-auto " />
        </div>
        <div className="position-relative relative ">
          <Skeleton className="position-absolute  absolute top-[60px] right-[20px]  w-[70%] h-[170px]   ms-auto rounded-3 bg-slate-300 mb-4" />
          <Skeleton className="block w-[80%] h-[170px]   mx-auto rounded-3 bg-slate-300 border border-white border-[5px] mb-4" />
        </div>
      </div>
    </div>
  );
};

export default Loading;
