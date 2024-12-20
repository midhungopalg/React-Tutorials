import { useEffect, useState } from "react";

const Table = ({calculation}) => {
    const [row, setRow] = useState([]);

    useEffect(()=> {
        setRow(calculation(2));
    },[calculation])
    return(
        <div>
            {row.map((value,index)=> {
                return <p key={index}>{value}</p>
            })}
        </div>
    )
}

export default Table;