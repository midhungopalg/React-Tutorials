import { useState,useEffect } from "react";

//in this case the title get updated only once that is in the intial render,this will usefull when  fetching data from API.
const CounterArray = () => {
    const [count, setCount] = useState(0);

    useEffect(()=> {
        document.title = `${count} updated`;
    }, []);

    return(
        <div>
            <h2>Counter with Empty Array</h2>
            <span>{count}</span>
            <button onClick={() => setCount(count+1)}>Increase</button>
        </div>
    )
}

export default CounterArray;