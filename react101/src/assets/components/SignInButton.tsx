import {useState} from "react";

const SignInButton = () => {
    const [signedIn, setSignedIn] = useState<boolean>(false);

    function handleSignIn() {
       if(signedIn === false){
            setSignedIn(true);
            console.log('signed in')
       }else{
            setSignedIn(false);
            console.log('signed out');
       }
    }
  return (
   <>
    <button className='btn' onClick={handleSignIn}>
        {signedIn ? 'Sign Out' : 'Sign In'}
    </button>
   </>
  )
}

export default SignInButton