import { BlogCard } from "./BlogCard";
import { useNavigate } from "react-router-dom"

export const BlogCardsView = ({ posts }) => {
    const navigate = useNavigate();

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map(post => (
                <BlogCard
                    key={post.id}
                    {...post}
                    onClicked={() => {
                        navigate(`/post/${post.id}`)
                        console.log("navigate to new route:", `/post/${post.id}/`);
                    }}
                />
            ))}
        </div>
    )
}