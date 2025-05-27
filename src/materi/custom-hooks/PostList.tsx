import useFetch from "./useFetch"

interface DataPost {
    id: number
    userId: number
    title: string
    body: string
}

const PostList = () => {
    const {data, loading, error} = useFetch<DataPost[]>('https://jsonplaceholder.typicode.com/posts')

    if (loading) {
        return <h1>Loading</h1>
    }

    if (error) {
        return <h1>Error</h1>
    }

    return (
        <div>
            <ul>
                {data?.map(post => {
                    return <li key={post.id}>{post.title}</li>
                })}
            </ul>
        </div>
    )
}

export default PostList
