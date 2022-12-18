import React, { useReducer } from "react";

const reducer = (state, action) => {
    switch(action.type) {
        case "INCREMENT":
            return {count: state.count +1, showText:state.showText};
        case "toogleText":
            return {count:state.count, showText:!state.showText};
        default:
            return state;
    }
}

const UseReducerComponent = () => {
    const [state, dispatch] = useReducer(reducer,{count:0,showText:true});
    return (
        <div>
            <p>{state.count}</p>
            <button onClick={() => {
                dispatch({type:"INCREMENT"});
                dispatch({type:"toogleText"});
            }}>Click Here</button>
            {state.showText && <p>Show Text</p>}
        </div>
    )
}

export default UseReducerComponent;