import React, { useState } from 'react'
import styles from './ContactForm.module.css'
import Button from '../Button/Button'
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const ContactForm = () => {

  const [name, setName] = useState("Anshu");
  const [email, setEmail] = useState("anshu@gmail.com")
  const [text, setText] = useState("Hello I am teacher having knowledge in science ")

  // save data 
  // let name;
  
  // on submit form even handler
  const onSubmit = (event) => {
    event.preventDefault();

    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value)
    
  }

  const onViaCallSubmit = () => {
    console.log("I am from call");
    
  }
  return (
   <section className= {styles.container}>
    <div className={styles.contact_form}>
      <div className={styles.top_btn}>
        <Button text = "SUPPORT CHAT"  icon = { <MdMessage fontSize= "24px" />} />
        <Button text = "CALL"  icon = { <FaPhoneAlt fontSize= "20px"/>} onClick = {onViaCallSubmit}/>

      </div>

       <Button 
           isOutline = {true}
           text = "EMAIL FORM"  
           icon = { <HiMail fontSize= "24px"/>} 
        />

        <form onSubmit={onSubmit}>
           <div className= {styles.form_container}>
                <label htmlFor="name">Name</label>
                <input type="text" name='name' />
           </div>
           <div className= {styles.form_container}>
                <label htmlFor="email">Email</label>
                <input type="email" name='email' />
           </div>
           <div className= {styles.form_container}>
                <label htmlFor="text">Text</label>
                <textarea type="text" name='text' rows='9'/>
           </div>

           <div style={ {display: 'flex',
            justifyContent :'end'
           }}>
             <Button text="SUBMIT" />
           </div>

           {/* display values */}

           <div> {name + " " + email + " " + text }</div>
        </form>
    </div>
     <div className={styles.contact_image}>
      <img src="/contact.svg" alt="" />
     </div>
    
   </section>
  )
}

export default ContactForm