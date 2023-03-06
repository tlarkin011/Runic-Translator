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
        case 'a' :
        translatedArray.push('ᚨ')

        break;
      case 'f' :
        console.log('this should be first') 
        translatedArray.push("ᚠ")
        case 'a' :
        translatedArray.push('ᚨ')

        break;
      case 'f' :
        console.log('this should be first') 
        translatedArray.push("ᚠ")
        case 'a' :
        translatedArray.push('ᚨ')

        break;
      case 'f' :
        console.log('this should be first') 
        translatedArray.push("ᚠ")
        case 'a' :
        translatedArray.push('ᚨ')

        break;
      case 'f' :
        console.log('this should be first') 
        translatedArray.push("ᚠ")
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
