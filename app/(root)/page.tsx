import HeaderBox from '@/components/HeaderBox'
import RightSideBar from '@/components/RightSideBar'
// import RightSidebar from '@/components/RightSideBar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import { getLoggedInUser } from '@/lib/actions/user.actions'
import React from 'react'
const Home = async() => {
   const loggedIn = await getLoggedInUser();

  return (
    <section className='home'>
  <div className="home-content">
    <header className='home-header'>
      <HeaderBox user={loggedIn?.name||"Guest"} title='Welcome'  type="greeting" subtext='Access & manage your account and transactions efficiently.'/>
    <TotalBalanceBox  totalBanks={3} totalCurrentBalance={2000}/>
    </header>



  </div>
  <RightSideBar  user={loggedIn}  banks={[]} transactions={[]} /> 
    </section>
  )
}

export default Home