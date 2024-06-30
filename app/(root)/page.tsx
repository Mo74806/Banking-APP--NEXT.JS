import HeaderBox from '@/components/HeaderBox';
import RecentTransactions from '@/components/RecentTransactions';
import RightSideBar from '@/components/RightSideBar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import { getAccount, getAccounts } from '@/lib/actions/bank.actions';
import { getLoggedInUser } from '@/lib/actions/user.actions';

import React from 'react';
import { metadata } from '../layout';
import { Loader } from 'lucide-react';
const Home = async ({ searchParams: { id, page } }: SearchParamProps) => {
  metadata.title = 'Bankify';
  const loggedIn = await getLoggedInUser();
  const accounts = await getAccounts({ userId: loggedIn?.$id });
  if (!accounts) return;
  const accountsData = accounts?.data;
  const appwriteItemId = (id as string) || accountsData[0]?.appwriteItemId;
  const account = await getAccount({ appwriteItemId });
  console.log(account?.transactions);

  return (
    <section className="home flex flex-wrap ">
      <div className="home-content  border border-red-0">
        <header className="home-header  ">
          <HeaderBox
            user={`${loggedIn?.firstName} ${loggedIn?.lastName}` || 'Guest'}
            title="Welcome"
            type="greeting"
            subtext="Access & manage your account and transactions efficiently."
          />
          <TotalBalanceBox accounts={accountsData} totalBanks={accounts?.totalBanks} totalCurrentBalance={accounts?.totalCurrentBalance} />
        </header>
        <div className="w-full">
          <RecentTransactions accounts={accountsData} transactions={account?.transactions} appwriteItemId={appwriteItemId} page={1} />
        </div>
      </div>
      <div className="">
        <RightSideBar user={loggedIn} banks={accountsData?.slice(0, 2)} transactions={accounts?.transactions} />
      </div>
    </section>
  );
};

export default Home;
