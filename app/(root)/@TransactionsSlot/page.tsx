import RecentTransactions from '@/components/RecentTransactions';
import { getAccount, getAccounts } from '@/lib/actions/bank.actions';
import { getLoggedInUser } from '@/lib/actions/user.actions';

import React from 'react';
const TransactionsSlot = async () => {
  // const TransactionsSlot = async ({ searchParams: { id, page } }: SearchParamProps) => {
  // const loggedIn = await getLoggedInUser();
  // const accounts = await getAccounts({ userId: loggedIn?.$id });
  // if (!accounts) return;

  // const accountsData = accounts?.data;
  // const appwriteItemId = (id as string) || accountsData[0]?.appwriteItemId;

  // const account = await getAccount({ appwriteItemId });

  setTimeout(() => {
    return (
      <>
        <div className="text-black-1">hello</div>
        {/* <RecentTransactions accounts={accountsData} transactions={account?.transactions} appwriteItemId={appwriteItemId} page={page} /> */}
      </>
    );
  }, 2000);
};

export default TransactionsSlot;
