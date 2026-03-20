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

const App = () => {

  const [contacts, setContacts] = useState([]) // empty array

  useEffect(() => {
    const getContacts = async () => {
       try{
          const contactsRef= collection(db, "contacts")
          const contactsSnapshot = await getDocs(contactsRef)
          const contactLists = contactsSnapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data()
            }
          })
          // console.log(contactLists);
          setContacts(contactLists)
          
       } catch (err){
          console.log(err);
       }
    }

    getContacts();
  }, [])
  return (
    // <div className='flex bg-red-500 justify-items-stretch'>App</div>
    <div className='mx-auto max-w-[370px] px-4'>
      <Navbar />
     <div className='flex gap-2'>
       {/* search */}
           <div className='relative flex items-center grow'>

           <FiSearch className='absolute ml-1 text-3xl text-white'/>
        
           <input type="text" className='grow h-10 rounded-md border border-white bg-transparent
            text-white pl-9' />
   
      </div>
       {/*  plus icon */}
      
          <AiFillPlusCircle className='cursor-pointer text-5xl text-white ' />
  
     </div>

     {/* display contacts */}
     <div className='mt-4'>{
       contacts.map((contact) => (
             <ContactCard key = {contact.id} contact = {contact} />
           )
      )}</div>
    </div>
  )
}

export default App