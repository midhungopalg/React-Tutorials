import { useState,useEffect } from "react";

//in this use effect example the page title will update when the count value changes or the component get updated
const Counter = () => {
    const [count, setCount] = useState(0);

    useEffect(()=> {
        document.title = `${count} updated`;
    })

    return(
        <div>
            <h1>Counter</h1>
            <span>{count}</span>
            <button onClick={() => setCount(count+1)}>Increass</button>
        </div>
    )
}

export default Counter;