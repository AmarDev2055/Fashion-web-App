import React from 'react'
import NavBar from "../components/NavBar";
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import AboutUs from '../components/AboutUs';
import Promo from '../components/Promo';
import Patnership from '../components/Patnership';

function About ()  {
  return (
    <>
    <NavBar/>
    <Hero
      propsName="aboutHero"
      heroImg="https://images.unsplash.com/photo-1462392246754-28dfa2df8e6b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      title="About"
      url="/"
    />
    <AboutUs/>
    <Promo/>
    <Patnership/>
    <Footer/>
    </>
  )
}

export default About;