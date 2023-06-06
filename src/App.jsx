import { useState } from 'react'
import './index.css'

function App() {
  const [string, setString] = useState('')
  const [translatedString, setTranslatedString] = useState('')

  const translate = (sentence) =>{
    setTranslatedString(sentence + ' translation')
  }

  return (
    <>
      <div className='translation'>
        {translatedString}
      </div>
      <input 
        type='string'
        onChange={e =>translate(e.target.value)}
      />
      
    </>
  )
}

export default App
