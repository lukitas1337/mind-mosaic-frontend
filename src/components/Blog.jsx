  import { BlogCardsView } from "./BlogCardsView";
  import CreateBlogForm from "./CreateBlogForm";
  import Navbar from "./Navbar";

  const Blog = ({ posts }) => {
      return (
          <div>
              <div className="blogsContainer flex  bg-[#1e1e1e]">
                  <BlogCardsView posts={posts} />
                  <CreateBlogForm />
              </div>
          </div>
      );
  };

  export default Blog;
