import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { PostDetailPage } from "./components/PostDetailPage";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import EditBlogForm from "./components/EditBlogForm";

const App = () => {
    const [posts, setPosts] = useState([]);

    useEffect(function () {
        async function getPosts() {
            try {
                const { data } = await axios.get(
                    "http://localhost:8000/api/v1/blogPosts"
                );

                setPosts(data);
            } catch (error) {
                throw new Error(error);
            }
        }
        getPosts();
    }, []);

    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blogs" element={<Blog posts={posts} />} />
                <Route path="/post/:id" element={<PostDetailPage />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/update/:id" element={<EditBlogForm />} />
            </Routes>
        </Router>
    );
};

export default App;
