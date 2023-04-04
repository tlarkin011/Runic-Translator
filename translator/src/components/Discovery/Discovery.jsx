import React from 'react'
import "./Discovery.css"
import ship from '../../assets/vikingart.jpg'
import  {Articles}  from '../../Articles/Articles'

// return article data from an article folder, easier to edit and cleaner code. 

// put articles in array for no reason, updated it t
// const data = Articles.map(element => {
//     return element.article1
// })

const article1 = Articles.article1

console.log(article1)

const Discovery = () => {
  return (
    <div className='container-sm'>
        <div className='row4'>
        <h1>What are Runes?</h1>
        </div>
        <div className='row5'>
            <div className='col-8 fade-in'>
            {article1}
            <cite> <a href='https://en.wikipedia.org/wiki/Runes#:~:text=A%20rune%20is%20a%20letter,and%20for%20specialised%20purposes%20thereafter.'>-Runes-Wikipedia</a></cite>
            </div>
            <div className='col-4'>
                <img src={ship} alt="ship art" className='img-fluid ship fade-in' />
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
