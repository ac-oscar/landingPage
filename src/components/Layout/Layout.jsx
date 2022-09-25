import * as React from 'react'
import { Header } from '../Header'
import { Footer } from '../Footer'

function Layout({ children }) {
  return (
    <div className="bg-black">
      <Header/>
      { children }
      <Footer/>
    </div>
  )
}

export default Layout