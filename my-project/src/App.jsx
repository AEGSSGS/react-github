import { useState } from 'react'

import './App.css'
import Header from './components/page/Header'
import First_page from './components/page/First_page'
import Second_page from './components/page/Second_page'
import Middle from './components/page/Middle'
import Footer from './components/page/Footer'
function App() {

  return (
    <>
      <Header/>
      <First_page/>
      <Second_page/>
      <Middle/>
      <Footer/>
    </>
  )
}

export default App
