import React, { useState } from "react";

const UseStateComponent = () => {
    const [inputValue, setInputValue] = useState("");

    let changeVal = (event) => {
        const value = event.target.value;
        setInputValue(value);
    }
    return (
        <div style={{position:"relative", top:"200px",left:"350px"}}>
            <input type="text" placeholder="Enter Some thing" onChange={changeVal}/>
            <div>
                {inputValue}
            </div>
        </div>
    );
}

export default UseStateComponent;