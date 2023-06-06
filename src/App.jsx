import { useState } from 'react'
import './index.css'

function App() {
  const [translatedString, setTranslatedString] = useState('')
  const vowels = ['a', 'e', 'i', 'o', 'u']

  const translate = (sentence) =>{
    let lowerCase = sentence.toLowerCase()
    setTranslatedString(lowerCase)
  }

  return (
    <>
      <div className='translation'>
        <h1>{translatedString}</h1>
      </div>
      <input 
        type='string'
        onChange={e =>translate(e.target.value)}
      />
      
    </>
  )
}

export default App
