import { BlogCardsView } from "./BlogCardsView";
import CreateBlogForm from "./CreateBlogForm";

const Blog = () => {
    return (
        <div>
            <div className="blogsContainer flex  bg-[#1e1e1e]">
                <BlogCardsView />
                <CreateBlogForm />
            </div>
        </div>
    );
};

export default Blog;
