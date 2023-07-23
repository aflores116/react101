import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UsingState from './assets/components/UsingState'
import LetsUseContextParent from './assets/components/LetsUseContextParent'

function App() {

  return (
    <>
    <div className='container'>
      <UsingState />
      <LetsUseContextParent />
    </div>
    </>
  )
}

export default App
