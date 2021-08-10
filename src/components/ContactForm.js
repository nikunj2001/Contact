import React from 'react'
import { useContext } from 'react';
import {ContactData} from '../Context/ContactData';
import { v4 as uuidv4 } from 'uuid';
import InputHook  from '../Hooks/InputHook'
const ContactForm = () => {
    const {dispatch} = useContext(ContactData);
    
    const [name,setName,resetName]=InputHook("");
    const [email,setEmail,resetEmail]=InputHook("");
    const [phone,setPhone,resetPhone]=InputHook("");
    const addNewContact = (e)=>{
        e.preventDefault();
     dispatch({type:"ADD_CONTACT",newContact:{id:uuidv4(),name,email,phone}});   
     resetName();
     resetEmail();
     resetPhone();
    }
    return (
        <div>
            <form action="" onSubmit={addNewContact}>
                <div className="form-group">
                    <h3>Add Contact</h3>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Enter Name" value={name} onChange={setName} name="name" />
                </div>
                <div className="form-group">
                    <input type="email" className="form-control" placeholder="Enter Email" value={email} onChange={setEmail} name="email" />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Enter Phone" value={phone} onChange={setPhone} name="Phone" />
                </div>
                <div className="form-group">
                    <input type="submit" className="btn btn-info btn-block"/>
                </div>
            </form>
        </div>
    )
}

export default ContactForm
