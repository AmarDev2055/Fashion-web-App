import React from 'react'
import "./AboutUsStyles.css"
const AboutUs = () => {
  return (
    <div className='about'>
        {/* <img className="backgroundd" src='https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3Vwd2s2MTg0MzExOC13aWtpbWVkaWEtaW1hZ2Uta293YzVmbDcuanBn.jpg' alt='' /> */}
        <div className='history'>
            <h1>Our History</h1>
            <p>
                Luxeloom, the esteemed fashion brand, was born from the vision of its founder and owner,
                Bodine "Bod" Montclair. In the early 21st century, Bod Montclair, a visionary entrepreneur
                with a deep passion for aesthetics and craftsmanship, embarked on a mission to redefine
                luxury fashion. With a keen eye for design and an unwavering commitment to quality,
                Bodine assembled a team of talented designers and artisans, laying the foundation for Luxeloom.
                The brand's name, a portmanteau of "luxury" and "loom," reflects Bod's dedication to weaving
                together the finest materials into exquisite garments. Under Bod Montclair's leadership,
                Luxeloom quickly gained acclaim for its timeless and sophisticated collections, earning
                a reputation for pushing the boundaries of style while maintaining a commitment to classic 
                elegance. Bodine Montclair's innovative spirit and dedication to excellence have propelled
                Luxeloom to the forefront of the fashion industry, solidifying its place as a beacon of
                luxury and style.
            </p>
            <div className='owner'>
                <img src='https://cdnstorage.sendbig.com/unreal/female.webp' alt=''/>
            <h5>Bodine "Bod" Montclair</h5> 
                <p>"I encourage each of you to continue challenging the status quo
                    , exploring new ideas, and pushing your creative boundaries.
                    Luxeloom is not just a brand; it's a reflection of our collective artistry and dedication
                    to creating garments that resonate with people on a profound level."</p>
            </div>
        </div>
        <div className='mission'>
            <p>Our Mission</p>
          <img src='https://www.adidas-group.com/media/filer_public_thumbnails/filer_public/7c/d0/7cd021dd-f37c-4d43-9c99-362d0c21e825/mission_en.jpeg__1028x0_q85_crop-smart_subsampling-2.jpg' alt='' />   
        </div>
    </div>
  )
}

export default AboutUs
