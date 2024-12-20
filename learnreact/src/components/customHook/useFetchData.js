import { useEffect,useState } from "react";

const useFetchData = (url) => {
    const [response, setResponse] = useState([]);

    useEffect(()=> {
        fetch(url).then((res) => res.json())
        .then((data) => setResponse(data));
    })

    return response;
}

export default useFetchData;