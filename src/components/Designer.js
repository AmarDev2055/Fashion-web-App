import React from 'react'
import "./Designer.css"
const Designer = () => {
  return (
    <div className='Designer'>
        <div id='images'>  
            <div id='image1'>
             <img src='https://images.unsplash.com/photo-1667374827736-ade3680ca412?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMyfFM0TUtMQXNCQjc0fHxlbnwwfHx8fHw%3D' alt='img1'/>
                <h3>Taitiana Pavlova</h3>
                <p>Designer</p>
            </div> 
            <div id='image2'>
                <h3>Rosa Rafael</h3>
                <p>Designer</p>
             <img src='https://images.unsplash.com/photo-1703244149331-33f166b82e4c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI1fFM0TUtMQXNCQjc0fHxlbnwwfHx8fHw%3D' alt='img1'/>
            </div> 
        </div>
        <div id='images'>   
            <div id='image2'>
             <img src='https://images.unsplash.com/photo-1634921243238-40a66a1eaa3b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDY5fFM0TUtMQXNCQjc0fHxlbnwwfHx8fHw%3D' alt='img1'/>
             <h3>Mahdi Chaghari</h3>
             <p>Designer</p>
            </div> 
            <div id='image1'>
                <h3>Mika Chavala</h3>
                <p>Designer</p>
             <img src='https://images.unsplash.com/photo-1682804969901-7633377d3760?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDcxfFM0TUtMQXNCQjc0fHxlbnwwfHx8fHw%3D' alt='img1'/>
            </div>
        </div>
        <div id='future'>
            <video src='https://player.vimeo.com/external/477106600.sd.mp4?s=21d35fe7301f2ea7f07b0605f20d4ea2d05e2745&amp;profile_id=164&amp;oauth2_token_id=57447761' autoPlay muted loop></video>
            <div id='vtext'>
             <h1>think of the box</h1>
             <button>Join The Style.</button>
            </div>
        </div>
    </div>
  )
}

export default Designer