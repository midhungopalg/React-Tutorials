import React,{useContext} from "react";
import {GlobalItem} from "../../App";

const SecondComponent = () => {
    const globalValue = useContext(GlobalItem);
    return(
        <div>
            <span>Global Value {globalValue}</span>
        </div>
    )
}

export default SecondComponent;