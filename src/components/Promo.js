import React from 'react'
import "./Promo.css"

const Promo = () => {
  return (
    <div className='promo'>
    <video width="100%" height="auto" autoPlay loop muted playsInline controls={false}>
        <source
            src="https://video-previews.elements.envatousercontent.com/h264-video-previews/b3b48bc6-ad7a-41dd-8c96-79598b6d0c55/36979225.mp4"
        type="video/mp4"
        />
    </video>
    </div>
  )
}

export default Promo
