import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import Blog from "./components/Blog";
import { useEffect, useState } from "react";
import { PostDetailPage } from "./components/PostDetailPage";
import Home from "./components/Home";

const App = () => {
    const [posts, setPosts] = useState([]);

    useEffect(function () {
        async function getPosts() {
            try {
                const { data } = await axios.get(
                    "http://localhost:8000/api/v1/blogPosts"
                );
                console.log(data);
                setPosts(data);
            } catch (error) {
                throw new Error(error);
            }
        }
        getPosts();
    }, []);
    console.log(posts);
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blog" element={<Blog posts={posts} />} />
                <Route path="/post/:id" element={<PostDetailPage />} />
            </Routes>
        </Router>
    );
};

export default App;
