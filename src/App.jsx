import React from 'react'
import Category from './Components/Category'
import Food from './Components/Food'
import HeadCards from './Components/HeadCards'
import Hero from './Components/Hero'
import NavBar from './Components/NavBar'

const App = () => {
  return (
    <div>
      <NavBar />
      <Hero/>
      <HeadCards/>
      <Food />
      <Category/>
    </div>
  )
}

export default App