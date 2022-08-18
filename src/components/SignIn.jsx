import React from 'react'
//import GoogleButton from 'react-google-button'
import loginnappi from "./uusloginnappi.jpg"

import {auth} from '../firebase'
import {GoogleAuthProvider, signInWithRedirect} from 'firebase/auth'

const style = {
    wrapper: `px -0 py 200 w-[80%] h-[37%] flex justify-center hover:bg-gray-100`
}

const googleSignIn = () => {
    const provider = new GoogleAuthProvider()
    signInWithRedirect(auth, provider)
}

const SignIn = () => {
  return (
    <div className={style.wrapper}>
        <button onClick={googleSignIn}><img src={loginnappi} alt="Login"/></button>
    </div>
  )
}

export default SignIn
