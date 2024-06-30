import { Skeleton } from '@/components/ui/skeleton';
import React from 'react';

const TransactionSlotLoading = () => {
  return (
    <div>
      {' '}
      <Skeleton className="block w-[100%] h-[15px] rounded-3 bg-slate-300 mb-2" />
      <Skeleton className="block w-[100%] h-[1px] rounded-3 bg-slate-300 mb-3" />
      {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((item: number) => (
        <div className="" key={item}>
          <Skeleton className="block w-[100%] h-[10px] rounded-3 bg-slate-300 mb-2" />
          <Skeleton className="block w-[100%] h-[1px] rounded-3 bg-slate-300 mb-2" />
        </div>
      ))}
    </div>
  );
};

export default TransactionSlotLoading;
