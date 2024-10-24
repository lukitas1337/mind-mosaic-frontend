
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BlogCardsView } from "./components/BlogCardsView";
import { useEffect, useState } from "react";
import { PostDetailPage } from "./components/PostDetailPage";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Blog from './components/Blog';
import Contact from './components/Contact';

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
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blog" element={<BlogCardsView posts={posts} />} />
              <Route path="/post/:id" element={<PostDetailPage />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
}

export default App;