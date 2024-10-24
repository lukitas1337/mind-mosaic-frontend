import { BrowserRouter, Routes, Route } from "react-router-dom";

import { PostDetailPage } from "./components/PostDetailPage";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import { PostProvider } from "./contexts/PostContext";

const App = () => {
    return (
        <PostProvider>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/blogs" element={<Blog />} />
                    <Route path="/post/:id" element={<PostDetailPage />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </BrowserRouter>
        </PostProvider>
    );
};

export default App;
