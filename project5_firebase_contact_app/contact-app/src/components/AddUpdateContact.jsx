import React from 'react'
import Model from './Model';
import { Formik, Form, Field  } from 'formik';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../config/firebase.js'

const AddUpdateContact = ( { isOpen, onClose, isUpdate, contact }) => {
  
  const addContact = async (contact) => {
    try{
        const contactRef = collection(db, "contacts");
        await addDoc(contactRef, contact)
    } catch(err){
     console.log(err);
     
    }
  }
  return (
    <div>
        <Model isOpen={isOpen} onClose = {onClose}>
            <Formik onSubmit={ (values) => {
                console.log(values)
                addContact(values)
            }}
            
            initialValues={ isUpdate ? {
                name: contact.name,
                email: contact.email
            } : {
                name: "",
                email: ""
            }}>
                <Form className='flex flex-col gap-4'>
                    <div className="flex flex-col gap-1">
                        <label htmlFor='name'>Name</label>
                        <Field name = "name" className="h-10 border" /> 
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor='email'>Email</label>
                        <Field name = "email"  className="h-10 border" /> 
                    </div>

                    <button className='border bg-orange-400 px-3 py-1.5 self-end'>
                        {isUpdate ? "Update" : "Add"}
                    </button>
                </Form>
            </Formik>
        </Model>
    </div>
  )
}

export default AddUpdateContact