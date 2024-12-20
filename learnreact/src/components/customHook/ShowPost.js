import useFetchData from "./useFetchData";

const ShowPost = () => {
    const data = useFetchData("https://jsonplaceholder.typicode.com/posts");
    return (
        <div>
            <h1>Show Post</h1>
            <ul>
                {data.map((item, index) => {
                    return(
                        <li key={index}>
                            <p>{item.title}</p>
                            <p>{item.body}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default ShowPost;