import React from 'react';
import './HeroStyles.css';

function Hero(props) {
  return (
    <>
        <div className={props.propsName}>
            <img src={props.heroImg} alt='heroImg'/>
          <div className='hero-text'>
            <h1>{props.title}</h1>
            <p>{props.text}</p>
            <a href="/Ono" className={props.btnClass}>{props.btnText}</a>
          </div>
        </div>
    </>
  )
}

export default Hero;