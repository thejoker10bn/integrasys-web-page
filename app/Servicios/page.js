import React from 'react'
import Navbar from '../components/NavBar'
import Servicios2 from './Servicios2'
import EmailSection from '../components/EmailSection'
import Footer from '../components/Footer'

const Servicios = () => {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] ">
      <Navbar />
      <div className="container mt-24 px-2 py-4">
        <Servicios2 />
        <EmailSection />
      </div>
      <Footer />
    </main>
  )
}

export default Servicios