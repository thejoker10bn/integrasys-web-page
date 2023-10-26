import React from 'react'
import Navbar from '../components/NavBar'
import EmailSection from '../components/EmailSection'
import Footer from '../components/Footer'
import Consultoria from './Consultoria'

const consultoria = () => {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] ">
        < Navbar />
    <div className="container mt-24 px-2 py-4">
        <Consultoria />
        <EmailSection />
    </div>
    <Footer />
    </main>

  )
}

export default consultoria