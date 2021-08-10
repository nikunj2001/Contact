import React from 'react'
import { useReducer } from 'react';
import { useState, } from 'react';
import {contactReducer} from '../Reducers/ContactReducer'
import { createContext } from 'react'
export const ContactData=createContext();
const ContactDataProvider = (props) => {
    
    const [contacts,dispatch]=   useReducer(contactReducer,[
        {id:1,name:"Nikunj",email:"nik@gmail.com",phone:123546789},
        {id:2,name:"Poorvi",email:"nik@gmail.com",phone:123546789},
        {id:3,name:"Nitin",email:"nik@gmail.com",phone:123546789},
    ]);
           
    
    return (
        <ContactData.Provider value={{users:contacts,dispatch}} >
            {props.children}
        </ContactData.Provider>
    )
}

export default ContactDataProvider
