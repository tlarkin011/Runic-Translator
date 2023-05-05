import React from 'react'
import { useState } from "react";
import Translation from "./Translation";
import '../App.css';
import Background from './Background/Background'
import viking from '../assets/viking-logo-fix.png'
import Discovery from "./Discovery/Discovery";

const Container = () => {
  
    const [val, setVal] = useState('')
    const [display, setdisplay] = useState('hidden')

    const change = event => {
      setVal(event.target.value)
      setdisplay('show')
    }
  
  
    
    return (
    <div>
      <Background />
     <div className="container">
      <div className="row">
        <div className="col col2">
          <img src={viking} alt="viking image" className="img-fluid"/>
        </div>
      </div>
      <div className="row">
          <div className="col">
          <input className="input" type="text"
          onChange={change}
          value = {val}
          placeholder="Type here"/>
          </div>
          <div className="row-1">
            <button type="button" className="btn btn-primary" onClick={() => setVal('')}> Clear</button>
          </div>
        <div>
          {/* Translation takes the val array as a prop */}
          <Translation 
          message = {val}
          display = {display}/>
          </div>
        </div>
        <div>
          <Discovery />
        </div>
      </div>
    </div>  
    
      
    )
  
}

export default Container
