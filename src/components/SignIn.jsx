import React from 'react'
//import GoogleButton from 'react-google-button'
import loginnappi from "./uusloginnappi.png"

import {auth} from '../firebase'
import {GoogleAuthProvider, signInWithRedirect} from 'firebase/auth'

const style = {
    wrapper: `flex justify-center`
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