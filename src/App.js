import { useState } from 'react';
import "bootswatch/dist/materia/bootstrap.min.css";
import './App.css';
import Nav from "./components/Nav"
import ContactDataProvider from "./Context/ContactData"
import Contacts from './components/Contacts'
import ContactForm from './components/ContactForm'
function App() {
   
  return (
    <div>

      <Nav/>
      <div className="container mt-5">

      <ContactDataProvider>
        <ContactForm/>
      <Contacts/>
      </ContactDataProvider>
      </div>

    </div>
      
  );
}

export default App;
