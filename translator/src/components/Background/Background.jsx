import React from 'react'
import './Background.css'
import overlay from "../../assets/funpng.webp"


const Background = () => {
    

  return (

    <div className='masthead'>
      
      <div className='color-overlay d-flex justify-content-center align-items-center'>
            <h1>Rune Maker</h1>
      </div>
      <div className='magic'>
        <img  src={overlay} className="img-fluid" />
      </div>
    </div>

    
  )
}

export default Background
