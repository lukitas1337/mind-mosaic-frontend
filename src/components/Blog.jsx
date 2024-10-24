import { BlogCardsView } from "./BlogCardsView";
import CreateBlogForm from "./CreateBlogForm";

const Blog = () => {
    return (
        <div className="blogsContainer flex flex-col items-center  bg-[#1e1e1e] md:flex-row md:items">
            <BlogCardsView />
            <CreateBlogForm />
        </div>
    );
};

export default Blog;
