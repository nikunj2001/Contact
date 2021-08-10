import React from 'react'
import { useContext } from 'react';
import {ContactData} from '../Context/ContactData';
import ContactDetails from './ContactDetails'
const Contacts = () => {
    const {users} = useContext(ContactData);
    console.log(users);
    return users.length ? <table className="table">
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Delete</th>
            </tr>
        </thead>
        <tbody>
            {
                users.map((user)=>
                    (
                        <tr key={user.id}>
 <ContactDetails user={user}/>  
                        </tr>
                       
                    )
                )
            }
        </tbody>
    </table> : <h1>Nod</h1>
}

export default Contacts
