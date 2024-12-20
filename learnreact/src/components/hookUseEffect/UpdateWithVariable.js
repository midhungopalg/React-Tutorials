import { useState, useEffect } from "react";

//in this the useeffect only call when the value of doubleVar get changed. and intial render.we can add multiple varaible with comma here.
const UpdateWithVariable = () => {
    const [count, setCount] = useState(0);
    const [doubleVar, setDoubleVar] = useState(0);

    useEffect(()=> {
        document.title = `${doubleVar} updated`;
    }, [doubleVar]);

    return (
        <div>
            <h1>Update with variable</h1>
            <span>{count}</span>
            <button onClick={() => setCount(count+1)}>Increment</button>
            <span>{doubleVar}</span>
            <button onClick={() => setDoubleVar(doubleVar+2)}>Double</button>
        </div>
    )
}

export default UpdateWithVariable;