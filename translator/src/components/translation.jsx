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
          translatedArray.push("ᚳ")
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

          case 'k' :
            translatedArray.push('ᚲ')
        break;

        case 'l' :
          translatedArray.push("ᛚ")
          break;

        case 'm' :
            translatedArray.push("ᛗ")
            break;
  
        case 'n' :
              translatedArray.push('ᛜ')
          break;
  
        case 'o' :
            translatedArray.push("ᛟ")
            break;

        case 'p' :
            translatedArray.push("ᛈ")
                break;
      
        case 'q' :
             translatedArray.push('ᚦ')
              break;
      
        case 'r' :
            translatedArray.push("ᚱ")
                break;
                
        case 's' :
         translatedArray.push("ᛊ ᛋ")
             break;
        
        case 't' :
            translatedArray.push("ᛏ")
                break;
              
        case 'u' :
            translatedArray.push('ᚢ')
                break;
              
        case 'v' :
            translatedArray.push("ᛇ")
                break; 
        case 'w' :
            translatedArray.push("ᚹ")
                break;

        case 'x' :
            translatedArray.push("X")
                 break;
      
        case 'y' :
            translatedArray.push('Y')
              break;
      
        case 'z' :
            translatedArray.push("ᛉ")
             break; 
        case ' ' :
            translatedArray.push("-")
            break;                                               
    }
    console.log(translatedArray)
   }

    


  return (
    <div className='row'>
        <div className='col'>
            <h2>this is where the translation will be:</h2>
        </div>
     <br/>
     <div className='row'>
        <div className='col'>
        <p className='display-1'>  {translatedArray} </p>
        </div>
     </div>
    </div>
  )
  } 

export default translation
