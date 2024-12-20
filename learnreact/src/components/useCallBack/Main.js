import { useState, useCallback } from "react";
import Table from "./Table";

const Main = () => {
    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);

    const calculation = useCallback((value)=> {
        let newNum = number+value;
        return [newNum*1,newNum*2,newNum*3];
    }, [number]);

    const cssStyle = {
        backgroundColor: dark?"black":"white",
        color: dark?"white":"black"
    }

    return(
        <div style={cssStyle}>
            <input type="number" onChange={(e) => setNumber(e.target.valueAsNumber)} value={number} />
            <Table calculation={calculation}/>
            <button onClick={() => setDark(true)}>Dark Theme</button>
        </div>
    )
}

export default Main;