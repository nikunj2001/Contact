import React,{useState} from 'react'

const Shortce = () => {
    const [demo, setdemo] = useState("asddfgsds");
    return (
        <div>
            <h1 className="">
                {
                    demo && "gupta"
                }
            </h1>
            {/* <h1 className="">Gupta</h1> */}
        </div>
    )
}

export default Shortce
