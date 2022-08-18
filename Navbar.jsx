import React from 'react';
import SignIn from './SignIn'
import LogOut from './LogOut'
import {auth} from '../firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
import tausta from './Images/headerBG.jpg'



const style = {
    nav: `bg-white-800 h-13 flex justify-between items-center p-4`,
    heading: `text-white text-xl`
}

const Navbar = () => {
    const [user] = useAuthState(auth)
    console.log(user)
  return (
    <div className={style.nav}>
      <h1 className={style.heading}><img src={tausta}></img></h1>
      {user ? <LogOut /> : <SignIn />}

    </div>
  );
};

export default Navbar;