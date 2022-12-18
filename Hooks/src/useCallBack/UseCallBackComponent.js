import axios from "axios";
import { useCallback, useState } from "react";
import ChildClass from "./ChildClass";

const UseCallBackComponent = () => {
    const [data, setData] = useState('Test text');

    const returnVal = useCallback((name)=> {
        return data+name;
    },[data]);

    return (
        <div>
            <ChildClass returnVal={returnVal}/>
        </div>
    )
}
export default UseCallBackComponent;