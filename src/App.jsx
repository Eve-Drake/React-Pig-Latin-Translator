import { useState } from 'react'
import './index.css'

function App() {
  const [translatedString, setTranslatedString] = useState('')


  const translate = (sentence) =>{
    let lowerCase = sentence.trim().toLowerCase()
    let stringWordArray = lowerCase.split(' ')
    for (let i = 0; i < stringWordArray.length; i++ ){
      let currentWord = stringWordArray[i]
      if(currentWord[0] === 'a' || currentWord[0] === 'e' || currentWord[0] === 'i' || currentWord[0] === 'o' || currentWord[0] === 'u'){
        currentWord = currentWord + 'ay'
        stringWordArray.splice(i, 1, currentWord)
      }
      else{
        let firstLetter = currentWord[0]
        currentWord = currentWord.substring(1)
        currentWord = currentWord + firstLetter + 'ay'
        stringWordArray.splice(i, 1 ,currentWord)
      }
    }
    setTranslatedString(stringWordArray.join(' '))
  }

  return (
    <>
      <div className='translation'>
        <h1>{translatedString}</h1>
      </div>
      <input 
        type='text'
        onChange={e =>translate(e.target.value)}
      />
      
    </>
  )
}

export default App
