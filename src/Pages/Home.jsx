import React from 'react'
import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import '../App.css'
import Header from '../components/Header.jsx'
import HeroSection from '../components/HeroSection.jsx'
import ExploreMenu from '../components/ExploreMenu.jsx'
import CustomerFavorite from '../components/CustomerFavorite.jsx'
import CustomersSay from '../components/CustomersSay.jsx'
import GetInTouch from '../components/GetInTouch.jsx'
// import InstantBiteFooter from '../components/InstantBiteFooter.jsx'



export default function Home({ addToCart }) {
  return (
    <div>
      <HeroSection></HeroSection>
      <ExploreMenu></ExploreMenu>
      <CustomerFavorite addToCart={addToCart}></CustomerFavorite>
      <CustomersSay></CustomersSay>
      <GetInTouch></GetInTouch>
      
    </div>
  )
}
