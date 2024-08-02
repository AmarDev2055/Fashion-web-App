import React from 'react'
import "./Clothing.css";

const Clothing = () => {
  return (
    <div className='clothing'>
        <div id="main">
            <div id="trend">
                <div id="paragraph">
                    <h5>01.</h5>
                    <h1>Sustainability</h1>
                    <p>Committed to sustainability, eco friendly choices for a better style.</p>
                </div>
                <img src='https://images.unsplash.com/photo-1703136686959-d6e53e9fab46?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8' alt='trend'/>
            </div>
            <div id="trend2">
                <div id="heading">
                    <p>Fancy</p>
                    <p>Styling.</p>
                </div>
                
                <img src='https://images.unsplash.com/photo-1578102718171-ec1f91680562?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZhc2hpb24lMjB0cmVuZHxlbnwwfHwwfHx8MA%3D%3D' alt='trend'/>
            </div>
            <div id="trend3">
                <img src='https://images.unsplash.com/photo-1598452963314-b09f397a5c48?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Z3VjY2klMjB0cmVuZHxlbnwwfHwwfHx8MA%3D%3D' alt='trend'/>
                <div id="paragraph">
                    <h5>02.</h5>
                    <h1>Compatibility</h1>
                    <p>Committed to Compatibility, comfort choices for a comforting style.</p>
                </div>
            </div>
        </div>
        <div id="message">
            <h4>Meet Our Designers at Luxe Loom</h4>
            <p>At Luxe Loom, we take pride in curating a team of exceptional
             designers who bring passion, creativity, <span id='onespan'></span> and a commitment to excellence to every stitch.
             Our designers are the  heart and soul <span id='twospan'></span> of our brand, each with a unique <span id='threespan'></span> flair that adds a
             distinctive touch to our collections.</p>
        </div>
    </div>
  )
}

export default Clothing