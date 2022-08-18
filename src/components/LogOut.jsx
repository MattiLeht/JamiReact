import React from 'react'
import {auth} from '../firebase'
import buttonout from '../Images/buttonout2.jpg'

const style = {
    button: `px-0 py-200 w-[37%] h-[37%]`,
}

const LogOut = () => {
const signOut = () => {
    signOut(auth)
}
  return (
    <button onClick={() => auth.signOut()} className={style.button}><img src={buttonout}></img>
    </button>
  )
}

export default LogOut
