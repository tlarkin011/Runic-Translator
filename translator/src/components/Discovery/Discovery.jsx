import React from 'react'
import "./Discovery.css"
import ship from '../../assets/vikingart.jpg'

const Discovery = () => {
  return (
    <div className='container-sm'>
        <div className='row4'>
        <h1>Why Runes?</h1>
        </div>
        <div className='row5'>
            <div className='col-8'>
                this is why, so many words and sutff
                 
                 this this why
            </div>
            <div className='col-4'>
                <img src={ship} alt="ship art" className='img-fluid ship' />
            </div>
        </div>
        <div className='row5'>
            <div className='col-4'>
                pic
            </div>
            <div className='col-8'>
                text
            </div>

        </div>

    </div>
  )
}

export default Discovery
