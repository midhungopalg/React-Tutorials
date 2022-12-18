import React, { useState, createContext } from "react";
import Login from "./Login";
import User from "./User";

export const AppContext = createContext(null);

const UseContextComponent = () => {
    const [name, setName] = useState('');
    return (
        <div>
            <AppContext.Provider value={{name,setName}} >
                <Login />
                <User />
            </AppContext.Provider>

        </div>
    );
}

export default UseContextComponent;