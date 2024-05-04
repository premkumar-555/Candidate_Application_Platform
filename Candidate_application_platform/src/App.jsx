import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Body from './layout/Body'
import Jobs from './pages/Jobs'

function App() {

  return (
    <Body>
      <Jobs/>
    </Body>
  )
}

export default App
