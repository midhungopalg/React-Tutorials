import { useState, useEffect } from "react";

//in this case if we did not use clear interval the page load will be slow and effect the performance
const Cleanup = () => {
    const [time, setTime] = useState(0);

    useEffect(()=> {
        const timer = setInterval(()=> {
            setTime(time+1)
        }, 1000);

        return () => {
            clearInterval(timer);
        }
    })
    return(
        <div>
            <h1>Clean up function</h1>
            <span>{time} in seconds</span>
        </div>
    )
}

export default Cleanup;