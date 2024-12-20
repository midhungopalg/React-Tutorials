import React,{useReducer} from "react";

const intialState = {count:0};

const reducer = (state, action) => {
    switch(action.type) {
        case "increment": return {count:state.count+1};
            break;
        case "decrement": return {count:state.count-1};
            break;
        default: return state;
    }
}
const CounterApp = () => {
    const [state, dispatch] = useReducer(reducer, intialState);

    return(
        <div>
            <h2>Counter</h2>
            <span>Value {state.count}</span>
            <button onClick={()=> dispatch({type:"increment"})}>Increase</button>
            <button onClick={() => dispatch({type:"decrement"})}>Decreass</button>
        </div>
    )
}

export default CounterApp;