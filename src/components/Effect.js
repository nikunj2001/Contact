import React, { useEffect } from 'react'
import { useState } from 'react';

const Effect = () => {
    const [count,setCount] = useState(0)
    useEffect(()=>{
        document.title=`count clicked ${count} times`
    },[]);
    return (    
        <div>
            <h1>{count}</h1>
            <button onClick={()=>setCount(count+1)}>Click Me</button>
        </div>
    )
}

export default Effect
