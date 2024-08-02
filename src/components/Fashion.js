import React from 'react'
import "./Fashion.css"
import videoFash from "../assets/fashionVideo.mp4"
import FashionData from './FashionData'
const Fashion = () => {
  return (
    <div className='fashion'>
        <h1>Popular Fashion</h1>
        <p>Define your fashion with luxeloom.</p>
        <FashionData
            className="first-fash"
            heading="Breitling"
            text="Breitling is a Swiss luxury watchmaker based in Grenchen, 
            Switzerland. Breitling watches are designed to withstand intensive
            use in the most trying conditions. Every Breitling watch is a COSC-certified
            chronometer, and only 3% of Swiss watch production are COSC certified.
            This guarantee draws interest, most notably, from divers and those in aviation.
            Common features found on Breitling include a highly readable face and strictly 
            mechanical winding mechanism. Breitling also offers interchangeable straps made from 
            leather, rubber or ECONYL fabric, a feature not often found among luxury watches."
            image1="https://www.borsheims.com/blog/wp-content/uploads/2022/05/breitling-navitimer-watch.webp"
            image2="https://images.unsplash.com/photo-1548171916-c0dea7f94ca6?q=80&w=1460&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

        />
        <FashionData
           className="first-fash-rev"
            heading="David Yurman"
            text="Started by David and Sybil Yurman in 1980 in New York, 
                this American jewelry brand came in much later than the other big brands.
                But hey, it is no less than the other big names in the industry.
                It makes jewelry to suit the many needs of women – whether it is for a red carpet event
                or as an everyday essential. Its signature piece is the ‘Cable Motif,’ which is all about 
                encompassing silver, platinum, or gold wire and decking up with gemstones or left polished.
                Celebrities are often spotted wearing David Yurman."
                image1="https://cdn2.stylecraze.com/wp-content/uploads/2018/06/7.-David-Yurman.jpg"
                image2="https://cdn2.stylecraze.com/wp-content/uploads/2018/06/14.-H.-Stern.jpg"
        />
         <div className='fassq'>
          <h1>Fashion Style</h1>
            <video width="100%" height="auto" autoPlay loop muted playsInline controls={false}>
              <source
                src={videoFash}
                type="video/mp4"
              />
            </video>
         </div>
    </div>
    
  )
}

export default Fashion