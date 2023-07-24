import './App.css';
import UsingUseEffect from './assets/components/UsingUseEffect';
import LetsUseContextParent from './assets/components/LetsUseContextParent';
import SignIn from './assets/components/SignIn';


function App() {

  return (
    <>
      <SignIn />

    <p>Are we signed in?</p>


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
