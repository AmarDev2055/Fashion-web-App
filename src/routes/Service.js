import React from 'react'
import NavBar from "../components/NavBar";
import Hero from '../components/Hero';
import Footer from '../components/Footer';

function Service ()  {
  return (
    <>
    <NavBar/>
    <Hero
      propsName="serviceHero"
      heroImg="https://images.unsplash.com/photo-1542058186993-286fdce0b580?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      title="Service"
      url="/"
    />
    <Footer/>
    </>
  )
}

export default Service;