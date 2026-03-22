import React from 'react'
import { HiOutlineUserCircle } from "react-icons/hi"
import { RiEditCircleLine } from "react-icons/ri"
import { IoMdTrash } from "react-icons/io"
import { deleteDoc , doc } from 'firebase/firestore'
import { db } from '../config/firebase.js'
import AddUpdateContact from './AddUpdateContact'
import useDisclouse from '../hooks/useDisclouse.js'
import { toast } from 'react-toastify'


const ContactCard = ({ contact }) => {

  const { onClose, onOpen, isOpen } = useDisclouse()

  const deleteContact = async (id) => {
    try{
        await deleteDoc(doc(db, "contacts", id))
        toast.success("Contact Deleted Successfully")
    } catch (err) {
    console.log(err);
    
    }
  }
  return (
      <>
        <div
          key={contact.id}
          className='mt-2 flex justify-between items-center p-2 rounded-lg bg-yellow-200'
        >
          <div className='flex gap-1'>
            <HiOutlineUserCircle className='text-4xl text-orange-400' />
            <div>
              <h2 className='font-medium'>{contact.name}</h2>
              <p className='text-sm'>{contact.email}</p>
            </div>
          </div>

          <div className='flex text-3xl'>
            <RiEditCircleLine onClick={onOpen} className='cursor-pointer' />
            <IoMdTrash onClick = { () => deleteContact(contact.id) }className='text-orange-400 cursor-pointer' />
          </div>
        </div>

        <AddUpdateContact isUpdate contact = {contact} isOpen={isOpen } onClose={ onClose}/>
      </>
)}



export default ContactCard