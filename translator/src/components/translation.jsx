import React from 'react'

const translation = () => {
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
  return (
    <div>
      
    </div>
  )
}

export default translation
