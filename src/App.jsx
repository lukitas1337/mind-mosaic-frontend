import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import EditBlogForm from "./components/EditBlogForm";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/update/:id" element={<EditBlogForm />} />
      </Routes>
    </Router>
  );
}

export default App;
