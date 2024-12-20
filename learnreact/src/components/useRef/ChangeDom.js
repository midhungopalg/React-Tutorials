import React,{useRef} from "react";

const ChangeDom = () => {
    const inputElem = useRef();

    const changeFunction = () => {
        inputElem.current.style.width = "300px";
    }
    return(
        <div>
            <input type="text" ref={inputElem} />
            <button onClick={changeFunction}>CLick</button>
        </div>
    )
}

export default ChangeDom;