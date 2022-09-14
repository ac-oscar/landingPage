import * as React from 'react'
import { Header } from '../Header'
import { Footer } from '../Footer'

function Layout({ children }) {
  return (
    <div className="bg-gradient-to-r from-black via-red-400 to-black">
      <Header/>
      { children }
      <Footer/>
    </div>
  )
}

export default Layout