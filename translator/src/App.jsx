import { useState } from "react";



function App() {

  const click = () => {
    const translatedArray = []
   const translateFrom = Array.from (val.toLowerCase())
   console.log(translateFrom)
   
   for (let i = 0; i < translateFrom.length; i++) {
    switch (translateFrom[i]) {
      case 'a' :
        console.log('it worked! ')

        break;
      case 'f' :
        console.log('this should be first') 
        translatedArray.push("yay")
    }
    console.log(translatedArray)
   }
    return translatedArray
  }


  


  const change = event => {
    setVal(event.target.value)
  }
  

  const [val, setVal] = useState('')


  
  return (
    <div className="App">
      <input type="text"
      onChange={change} />
      <button onClick={click}> Click me</button>

      <div>
        <h2>  </h2>
      </div>
    </div>

    
  )
}

export default App;
