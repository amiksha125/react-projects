import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import { FiSearch } from 'react-icons/fi'
import { AiFillPlusCircle } from 'react-icons/ai'
import { collection, getDocs } from 'firebase/firestore';
import { db } from './config/firebase';
import { HiOutlineUserCircle } from 'react-icons/hi'
import { IoMdTrash } from 'react-icons/io';
import { RiEditCircleLine } from "react-icons/ri"
import ContactCard from './components/ContactCard';
import AddUpdateContact from './components/AddUpdateContact';
import useDisclouse from './hooks/useDisclouse.js'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {  onSnapshot } from "firebase/firestore";
import NotFoundContact from './components/NotFoundContact.jsx';


const App = () => {

  const [contacts, setContacts] = useState([]) // empty array
  const { onClose, onOpen, isOpen } = useDisclouse()


useEffect(() => {
  const contactsRef = collection(db, "contacts");

  const unsubscribe = onSnapshot(contactsRef, (snapshot) => {
    const contactLists = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    setContacts(contactLists);
  });

  return () => unsubscribe();
}, []);


const filterContacts = (e) => {
  const value = e.target.value;

  const contactRef = collection(db, "contacts");

  onSnapshot(contactRef, (snapshot) => {
    const contactLists = snapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data()
      };
    });

    const filteredContacts = contactLists.filter(contact => contact.name.toLowerCase().includes(value.toLowerCase()))

    setContacts(filteredContacts);
    return filteredContacts;
  })
}
  return (
    // <div className='flex bg-red-500 justify-items-stretch'>App</div>
    <div className='mx-auto max-w-[370px] px-4'>
      <Navbar />
     <div className='flex gap-2'>
       {/* search */}
           <div className='relative flex items-center grow'>

           <FiSearch className='absolute ml-1 text-3xl text-white'/>
        
           <input onChange = { filterContacts } type="text" className='grow h-10 rounded-md border border-white bg-transparent
            text-white pl-9' />
   
      </div>
       {/*  plus icon */}
      
          <AiFillPlusCircle onClick = {onOpen} className='cursor-pointer text-5xl text-white ' />
  
     </div>

     {/* display contacts */}
     <div className='mt-4'>{
      contacts.length <= 0 ? <NotFoundContact /> :
       contacts.map((contact) => (
             <ContactCard key = {contact.id} contact = {contact} />
           )
      )}</div>

      <AddUpdateContact onClose={ onClose} isOpen={ isOpen }/>
       <ToastContainer position="top-right" />
    </div>
  )
}

export default App