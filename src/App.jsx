import { BlogCardsView } from "./components/BlogCardsView";
import { useEffect, useState } from "react";
import { PostDetailPage } from "./PostDetailPage";

const App = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5001/api/v1/blogPosts")
            .then(response => response.json())
            .then(setPosts)
            .catch(error => console.error(error))
    }, [])

    return (
        <div>
            <BlogCardsView posts={posts} />

            <PostDetailPage />
        </div>
    )
}

export default App