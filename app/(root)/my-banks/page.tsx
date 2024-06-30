import BankCard from '@/components/BankCard';
import HeaderBox from '@/components/HeaderBox';
import { Skeleton } from '@/components/ui/skeleton';
import { getAccounts } from '@/lib/actions/bank.actions';
import { getLoggedInUser } from '@/lib/actions/user.actions';
import React from 'react';
import { metadata } from '@/app/layout';
const MyBanks = async () => {
  metadata.title = 'Bankify - My Banks';

  const loggedIn = await getLoggedInUser();
  const accounts = await getAccounts({
    userId: loggedIn.$id,
  });

  return (
    <section className="flex">
      <div className="my-banks">
        <HeaderBox title="My Bank Accounts" subtext="Effortlessly manage your banking activites." />

        <div className="space-y-4">
          <h2 className="header-2">Your cards</h2>
          <div className="flex flex-wrap gap-6  justify-center lg:justify-start ">
            {accounts &&
              accounts.data.map((a: Account) => (
                <div key={a.id}>
                  <BankCard account={a} userName={loggedIn?.firstName} />
                  <div className="flex">
                    <div className="w-auto ms-auto"></div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyBanks;