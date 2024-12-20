import { useState } from "react";

//usestate is used to add state variables to component

const UseStateHook = () => {
    const [counter, setCounter] = useState(0);
    const [name, setName] = useState("Some one");

    const increasCounter = () => {
        setCounter(counter+1);
    }

    const decreassCount = () => {
        setCounter(counter-1);
    }

    return (
        <div>
            <h1>use state</h1>
            <div>
                <input type="text" onChange={e => setName(e.target.value)}/>
            </div>
            <button onClick={increasCounter}>Increase</button>
            <span>{name} clicked {counter} times..</span>
            <button onClick={decreassCount}>Decreass</button>
        </div>
    )
}

export default UseStateHook;