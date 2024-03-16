import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RevenueCard } from './components/RevenueCard'
import { NextPaymentCard } from './components/NextPaymentCard'
import { TopBar } from './components/TopBar'
import { RevenueCardBlue } from './components/RevenueCardBlue'
import { PayoutRefundButton } from './components/PayoutRefundButton'
import { PayoutRefundButtonBlue } from './components/PayoutRefundButtonBlue'
import { OverViewThisMonth } from './components/OverViewThisMonth'
import { AllOrderCard } from './components/AllOrderCard'
import { SideBar } from './components/SideBar'

function App() {

  return (
    <div className='flex'>
      <div className=' lg:w-1/6'>
        <SideBar/>
      </div>
        <div className='bg-gray-100 lg:w-5/6'>
            <div className='sticky top-0'>
                <TopBar/>
            </div>
            

            <div>
                <OverViewThisMonth/>
            </div>
            
            <div className='p-4 md:grid grid-cols-2 lg:grid-cols-3'>
                  <div className='bg-blue text-white rounded-md hover:bg-hover'>
                      <RevenueCardBlue title={"Next Payout"} amount={"2,312.23"} orderCount={23}/>
                      <NextPaymentCard date={"Today "} time={"4:00PM"}/>
                  </div>
                  
                <div className='rounded-md pb-4 pt-4 md:pl-4 lg:pr-4'>
                  <RevenueCard title={"Amount Pending"} amount={"92,312.20"} orderCount={13}/>
                </div>
              
                <div className='md:col-span-2 lg:col-auto rounded-md md:pt-4'>
                    <RevenueCard title={"Amount Processed"} amount={"23,92,312.19"}/>
                </div>
            
            </div>
            <div className='text-xl p-5 font-medium'>
              Transactions | This Month
            </div>

            <div className='flex'>
              <PayoutRefundButton title={"Payouts"} paymentno={"22"}/>
              <div className=''>
                <PayoutRefundButtonBlue title={"Refund"} paymentno={"6"}/>
              </div>

            </div>

            <div className='p-5 '>
              <AllOrderCard/>

            </div>
          
          
              <div className='text-lg text-center pb-6'>
                Made With ❤️ By <a className='underline font-semibold' href='https://www.linkedin.com/in/bikash-kumar-samantaray-500b59213/'>Bikash kumar Samantaray</a>
              </div>
        
          </div>
        </div>
  )
}

export default App
