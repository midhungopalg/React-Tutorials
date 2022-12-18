import React, { useRef } from "react";

const UseRefComponent = () => {
    const inputRef = useRef(null);

    const changeName = () => {
        inputRef.current.value = '';
    }

    return (
        <div>
            <p>Hello World </p>
            <input type="text" placeholder="Enter..." ref={inputRef} />
            <button onClick={changeName} >Submit</button>
        </div>
    )
}

export default UseRefComponent;