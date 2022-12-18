import React, { useEffect } from "react";

const ChildClass = ({returnVal}) => {
    useEffect(() => {
        console.log('INN')
    },[returnVal])
    return <div>{returnVal('HELOEEEE')}</div>
}

export default ChildClass;