import React,{useState, useEffect, useRef} from "react";

const AvoidReRender = () => {
    const [name, setName] = useState("");
    const count = useRef(0);

    useEffect(()=>{
        count.current = count.current+1;
    })

    return(
        <div>
            <input type="text" onChange={(e)=> setName(e.target.value)}/>
            <span>{name}</span>
            <span>count {count.current}</span>
        </div>
    )
}

export default AvoidReRender;