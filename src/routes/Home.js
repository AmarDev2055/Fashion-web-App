import React from 'react'
import NavBar from "../components/NavBar";
import Hero from '../components/Hero';
import Fashion from '../components/Fashion';
import RecentFashion from '../components/RecentFashion';
import Footer from '../components/Footer';
import Landing from '../components/Landing';

function Home ()  {
  return (
    <>
        <NavBar/>
        <Hero
          propsName="hero"
          heroImg="https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="Luxury Unleashed, Lively Living"
          text="Define Your Style."
          btnText="Check Out"
          url="/"
          btnClass="show"
        />
        <Fashion/>
        <RecentFashion/>
        <Landing/>
        <Footer/>
    </>
  )
}

export default Home;