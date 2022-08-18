import React, { useState } from 'react';
import {auth, db} from '../firebase'
import {addDoc, collection, serverTimestamp} from 'firebase/firestore'
import send from './buttonsend2.jpg'
import loota from './tekstiloota.jpg'


const style = {
  form: `h-15 w-full max-w-[728px]  flex text-xl flexgit bottom-0`,
  input: `w-full text-xl p-3 bg-gray-900 text-white outline-none border-none`,
  button: `px-0 py-200 w-[25%] h-[5%] bg-green-500`,
}
  


const SendMessage = ({scroll}) => {
  const [input, setInput] = useState('');

  const sendMessage = async (e) => {
    e.preventDefault()
    if (input === '') {
        alert('Please enter a valid message')
        return
    }
    const {uid, displayName} = auth.currentUser
    await addDoc(collection(db, 'messages'), {
        text: input,
        name: displayName,
        uid,
        timestamp: serverTimestamp()
    })
    setInput('')
    scroll.current.scrollIntoView({behavior: 'smooth'})
  }
  

  return (
    <form onSubmit={sendMessage}className={style.form}>
   
      <input
        value= {input }
        onChange={(e) => setInput(e.target.value)}
        className={style.input}
        type='text'
        placeholder='Message'
       
      />
      
      <button className={style.button} type='submit'><img src={send}></img>
        
      </button>
    </form>
  );
};

export default SendMessage;
