import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BlogCardsView } from "./components/BlogCardsView";
import { useEffect, useState } from "react";
import { PostDetailPage } from "./components/PostDetailPage";

const App = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5001/api/v1/blogPosts")
            .then(response => response.json())
            .then(setPosts)
            .catch(error => console.error(error))
    }, [])

    return (
        <Router>
            <Routes>
                <Route
                    path="/blog"
                    element={<BlogCardsView posts={posts} />}
                />
                <Route
                    path="/post/:id"
                    element={<PostDetailPage />}
                />
            </Routes>
        </Router>
    );
}
export default App;
