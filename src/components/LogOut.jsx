import React from 'react'
import {auth} from '../firebase'
import buttonout from './buttonout.jpg'

const style = {
    button: `bg-white-200 px-4 py-2 hover:bg-gray-100`,
    button1: buttonout
}


const LogOut = () => {
const signOut = () => {
    signOut(auth)
}

  return (
    
    <button onClick={() => auth.signOut()} className={style.button}><img src={buttonout}></img>
    LogOut
        
    </button>
  )
}

export default LogOut