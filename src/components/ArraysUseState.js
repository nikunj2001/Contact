import React from 'react'
import { useState } from 'react'

const ArraysUseState = () => {
    const [obj,setObj] = useState(
        {name:"Poorvi Tiwari",age:15,degree:"Btech"})
    const updateData=()=>{
            setObj({...obj,name:"Poorvi Gupta"})
    }
    return (
        <div>
                    <h1 >Name: {obj.name}  &  Age: {obj.age} & Degree:{obj.degree}</h1>
                <button onClick={()=>updateData()}>Clear Data</button>

        </div>
    )
}

export default ArraysUseState
