import React from 'react'
import { GlobalContextProvider } from '../../context/GlobalContext'
import { Outlet } from 'react-router-dom'
import Header from '../../components/header'
import Footer from '../../components/footer'
import Sidebar from '../Sidebar'

export default function Layout() {
  return (
    <GlobalContextProvider>
      <Header />
      <div className='grid grid-cols-[1fr,_400px] mt-6 h-[75vh] '>
        <main className='flex'>
          <div className='w-[40%]'></div>
          <Outlet />
        </main>
        <Sidebar/>
      </div>
     <Footer/>
    </GlobalContextProvider>
  )
}
