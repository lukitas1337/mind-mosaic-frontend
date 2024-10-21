import { BlogCard } from "./BlogCard";

export const BlogCardsView = ({ posts }) => (
    <div>
        {posts.map(post => (
            <BlogCard
                key={post.id}
                {...post}
            />
        ))}
    </div>
);