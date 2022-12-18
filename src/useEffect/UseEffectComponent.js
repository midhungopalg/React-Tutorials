import React, {useEffect, useState} from "react";
import axios from "axios";

const UseEffectComponent = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
        .get("https://jsonplaceholder.typicode.com/comments")
        .then((response) => {
            console.log(response.data)
            setData(response.data);
        });
    }, []);
    return(
        <div>
            {data.map((item) => {
                return(
                    <div>{item.email}</div>
                );
            })}
        </div>
    )
}

export default UseEffectComponent;