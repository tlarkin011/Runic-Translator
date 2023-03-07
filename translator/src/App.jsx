import { useState } from "react";
import Translation from "./components/Translation";

function App() {
  
  const [val, setVal] = useState('')

  const change = event => {
    setVal(event.target.value)
  }
  




  
  return (
    <div className="App">
      <input type="text"
      onChange={change} />
      <button onClick={change}> Clear</button>

      <div>
        <Translation 
        message = {val}/>
      </div>
    </div>

    
  )
}

export default App;
