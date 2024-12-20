import React,{useState, useMemo} from "react";

const MemoLoop = () => {
    const [number, setNumber] = useState(0);
    const [mode, setMode] = useState("white");

    const calculation = useMemo(()=> {
        return complexCalulation(number);
    }, [number]);

    const cssStyle = {
        backgroundColor: mode == "dark" ?"black": "white",
        color: mode == "dark"?"white": "black"
    }
    return(
        <div style={cssStyle}>
            <h1>Memo Loop</h1>
            <input type="number" onChange={(e)=> setNumber(e.target.value)} value={number}/>
            <h2>calculation {calculation}</h2>
            <button onClick={()=> setMode('dark')}>Dark Mode</button>
            <button onClick={()=> setMode('white')}>Normal Mode</button>
        </div>
    )
}

function complexCalulation(num) {
    for(let i=1; i< 100000; i++) {
        return num;
    }
}

export default MemoLoop;