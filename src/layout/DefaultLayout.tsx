import React from 'react'
import { Outlet } from 'react-router-dom'

import Header from './default/Header'
import Footer from './default/Footer'

const DefaultLayout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default DefaultLayout