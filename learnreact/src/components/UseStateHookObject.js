import { useState } from "react";

const UseStateHookObject = () => {
    const [details, setDetails] = useState({name:"some one", counter: 0});

    const increase = () => {
        setDetails((prev) => ({
            ...prev,
            counter: prev.counter+1,
        }));
    }

    const decreass = () => {
        setDetails((prev) => ({
            ...prev,
            counter: prev.counter-1
        }));
    }
    return (
        <div>
            <h1>Use Hook Object</h1>
            <div>
                <input type="text" onChange={(e)=> setDetails((prev)=> ({
                    prev,
                    name: e.target.value,
                    counter:prev.counter
                    }))} />
            </div>
            <button onClick={increase}>Increass</button>
            <span>{details.name} clicked {details.counter} times.</span>
            <button onClick={decreass}>Decreass</button>
        </div>
    )
}

export default UseStateHookObject;