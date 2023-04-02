import React from 'react'
import "./Discovery.css"
import ship from '../../assets/vikingart.jpg'
import  {Articles}  from '../../Articles/Articles'

// return article data from an article folder, easier to edit and cleaner code.  
const data = Articles.map(element => {
    return element.article1
})

const Discovery = () => {
  return (
    <div className='container-sm'>
        <div className='row4'>
        <h1>What are Runes?</h1>
        </div>
        <div className='row5'>
            <div className='col-8'>
            {data}
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
