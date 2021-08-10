import React from 'react'
import { useState } from 'react'

const Rules = () => {
    const [Name,setName]= useState("Nikunj");
    return (
        <div>
            <h1>{Name}</h1>
        </div>
    )
}

export default Rules
