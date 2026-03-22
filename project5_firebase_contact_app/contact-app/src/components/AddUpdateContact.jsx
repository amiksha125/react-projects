import React from 'react'
import Model from './Model';
import { Formik, Form, Field, ErrorMessage  } from 'formik';
import { addDoc, collection, doc, updateDoc } from 'firebase/firestore';
import { db } from '../config/firebase.js'
import { toast } from 'react-toastify'
import * as Yup from "yup";

// if empty name and email added then validate
const contactSchemaValidation = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required")
})

const AddUpdateContact = ( { isOpen, onClose, isUpdate, contact }) => {
  
  const addContact = async (contact) => {
  try {
    const contactRef = collection(db, "contacts");
    await addDoc(contactRef, contact);

    toast.success("Contact Added Successfully");
    onClose();

  } catch (err) {
    console.log(err);
    toast.error("Error adding contact");
  }
}

 const updateContact = async (contact, id) => {
  try {
    const contactRef = doc(db, "contacts", id);
    await updateDoc(contactRef, contact);

    toast.success("Contact Updated Successfully");
    onClose();

  } catch (err) {
    console.log(err);
    toast.error("Error Updating contact");
  }
}


  return (
    <div>
        <Model isOpen={isOpen} onClose = {onClose}>
            <Formik 
            validationSchema={ contactSchemaValidation }
            onSubmit={ (values) => {
                console.log(values)
                isUpdate ? updateContact(values, contact.id) : addContact(values)
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
                        {/* show error if name is not provied through validation yup */}
                        <div className='text-red-500 text-xs'>
                          <ErrorMessage name='name' />
                        </div>
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor='email'>Email</label>
                        <Field name = "email"  className="h-10 border" />
                        <div className='text-red-500 text-xs'>
                          <ErrorMessage name='email' />
                        </div> 
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