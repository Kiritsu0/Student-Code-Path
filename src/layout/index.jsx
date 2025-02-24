import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Layout() {
  return (
    <div>
      <Navbar />
      <main className='bg-gray-900'>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout