import React, { useContext } from "react";
import { AppContext } from "./UseContextComponent";

const User = () => {
    const { name } = useContext(AppContext);
    return (
        <div>
            <p>User {name}</p>
        </div>
    )
}

export default User;