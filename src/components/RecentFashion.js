import React from 'react'
import "./RecentStyles.css"
import RecentFashionData from './RecentFashionData'


function RecentFashion () {
  return (
    <div className='recent-fash'>
        <h1>Recent Fashion</h1>
        <p>Discover The Key Trends Of The Fashion</p>
        <div className='recent-card'>
            <RecentFashionData
            image="https://static.fibre2fashion.com/articleresources/images/91/9076/1_files/image002.jpg?v=20210616T144221"
            heading="Hoodies Under Blazers"
            text="One of the most popular styles rocking the current fashion trends is the ever-so cosy hoodie,
             however, worn with a twist. Regardless, wearing a blazer with a hoodie is no longer just another
             street style but a transcendent, mainstream look."
            />
            <RecentFashionData
            image="https://static.fibre2fashion.com/articleresources/images/91/9076/1_files/image004.jpg?v=20210616T144221"
            heading="Boiler Suits"
            text="Traditionally made from heavy canvas or denim, the one-zip wonder was one of many game-changing 
            inventions to come out of the industrial revolution.
            With boiler suits, comfort and practicality are both high on the list."
            />
            <RecentFashionData
            image="https://static.fibre2fashion.com/articleresources/images/91/9076/1_files/image006.jpg?v=20210616T144221"
            heading="Colour blocking"
            text="Clash rainbow brights to stand out, bringing classic suiting and romantic ruffles into 2021 by mixing
             punch-packing pop colours with vivid greens. Colour blocking is one of the most surprising ways you can
             make a statement by pairing contrasting colours"
            />
            <RecentFashionData
            image="https://static.fibre2fashion.com/articleresources/images/91/9076/1_files/image008.jpg?v=20210616T144221"
            heading="Maxies"
            text="The maxi dress style has always been one of the most versatile things a woman wears. 
            Are they headed out on a summer night? – Throw it on with sandals and go. 
            Are you going to a wedding? – Dress it up with jewels and heels."
            />
        </div>
    </div>
  )
}

export default RecentFashion