import React from 'react'
import NavBar from "../components/NavBar";
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';

function Contact ()  {
  return (
    <>
    <NavBar/>
    <Hero
      propsName="contactHero"
      heroImg="https://images.unsplash.com/photo-1466096115517-bceecbfb6fde?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      title="Contact"
      url="/"
    />
    <ContactForm/>
    <Footer/>
    </>
  )
}

export default Contact;