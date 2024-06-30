import MobileNavBar from '@/components/MobileNavBar';
import SideBar from '@/components/SideBar';
import { Toaster } from '@/components/ui/toaster';
import { getAccount, getAccounts } from '@/lib/actions/bank.actions';
import { getLoggedInUser } from '@/lib/actions/user.actions';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import type React from 'react';

export default async function RootLayout({
  children,
}: // TransactionsSlot,
Readonly<{
  children: React.ReactNode;
  // TransactionsSlot: React.ReactNode;
}>) {
  // const transactionSegment = useSelectedLayoutSegment('TransactionsSlot');
  const loggedIn = await getLoggedInUser();
  console.log('first');
  console.log(loggedIn);
  if (!loggedIn) redirect('/sign-in');

  // const loggedIn = await getLoggedInUser();
  const accounts = await getAccounts({ userId: loggedIn?.$id });
  if (!accounts) return;

  const accountsData = accounts?.data;
  const appwriteItemId = accountsData[0]?.appwriteItemId;

  const account = await getAccount({ appwriteItemId });

  console.log({
    accountsData,
    account,
  });

  return (
    <main className="flex h-screen w-full font-inter">
      <SideBar user={loggedIn} />
      <div className="flex size-full  flex-col">
        <div className="root-layout">
          <Image src="/icons/logo.svg" width={30} height={30} alt="logo" />
          <div>
            <MobileNavBar user={loggedIn} />
          </div>
        </div>
        <Toaster />
        {children}
      </div>
    </main>
  );
}
