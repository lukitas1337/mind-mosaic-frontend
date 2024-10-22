import { BlogCard } from "./BlogCard";

export const BlogCardsView = ({ posts }) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map(post => (
            <BlogCard
                key={post.id}
                {...post}
            />
        ))}
    </div>
);