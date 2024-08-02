import React from 'react'
import "./Check.css"
import Clothing from './Clothing'
import Designer from './Designer'


const Check = () => {
  return (
    <div className='check'>
        <div className='outfits'>
        <Clothing/>
        <Designer/>
        </div>
        
    </div>
  )
}

export default Check
