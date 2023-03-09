import { useState } from "react";
import Translation from "./components/Translation";
import './App.css';
import background from './assets/background.jpg'
import Background from "./components/Background";




const App = () => {
  
  const [val, setVal] = useState('')

  const change = event => {
    setVal(event.target.value)
  }
  
  return (
  <div>
    <Background />
   <div className="container">
    <div className="row-">
    </div>
    <div className="row">
        <div className="col">
        <input type="text"
        onChange={change} />
        </div>
        <div className="row-1">
          <button type="button" className="btn btn-primary" onClick={change}> Clear</button>
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
