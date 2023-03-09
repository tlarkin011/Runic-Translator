import { useState } from "react";
import Translation from "./components/Translation";
import './App.css';
import Background from "./components/Background";
import viking from './assets/viking-logo-fix.png'




const App = () => {


  const [val, setVal] = useState('')

  const change = event => {
    setVal(event.target.value)
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
        placeholder="Type your message here"/>
        </div>
        <div className="row-1">
          <button type="button" className="btn btn-primary" onClick={() => setVal('')}> Clear</button>
        </div>
      <div>
        {/* Translation takes the val array as a prop */}
        <Translation 
        message = {val}/>
        </div>
      </div>
    </div>
  </div>  
  
    
  )
}

export default App;
