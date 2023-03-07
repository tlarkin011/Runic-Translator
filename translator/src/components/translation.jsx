import React from 'react'

const translation = ({message}) => {
    


   const translatedArray = []
   const translateFrom = Array.from (message.toLowerCase())
   
   for (let i = 0; i < translateFrom.length; i++) {
    switch (translateFrom[i]) {
    
       case 'a' :
            translatedArray.push('ᚨ')
        break;

        case 'f' :
          translatedArray.push("ᚠ")
          break;

        case 'b' :
            translatedArray.push('ᛒ')
        break;

        case 'c' :
          translatedArray.push("ᚲ")
          break;

        case 'd' :
            translatedArray.push('ᛞ')
        break;

        case 'e' :
          translatedArray.push("ᛖ")
          break; 
        
          case 'g' :
            translatedArray.push('ᚷ')
        break;

        case 'h' :
          translatedArray.push("ᚺ ᚻ")
          break;

          case 'i' :
            translatedArray.push('ᛁ')
        break;

        case 'j' :
          translatedArray.push("ᛃ")
          break;

          case 'a' :
            translatedArray.push('ᚨ')
        break;

        case 'f' :
          translatedArray.push("ᚠ")
          break;
    }
    console.log(translatedArray)
   }

    


  return (
    <div>
     <h2>this is where the translation will be:</h2>
     <br/>
     <div>
        <p>  {translatedArray} </p>
     </div>
    </div>
  )
  } 

export default translation
