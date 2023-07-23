import './App.css'
import UsingUseEffect from './assets/components/UsingUseEffect'
import LetsUseContextParent from './assets/components/LetsUseContextParent'

function App() {

  return (
    <>
    <div className='container'>
      <UsingUseEffect 
      sectionName='useEffect' />
      <LetsUseContextParent
      sectionName='Context' />
    </div>
    </>
  )
}

export default App
