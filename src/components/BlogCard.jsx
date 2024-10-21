export const BlogCard = ({ title, content, date, readMoreButton }) => (
    <div>
        <h1>{title}</h1>
        <p>{content}</p>
        <p>{new Date(date).toLocaleDateString()}</p>
        <button>{readMoreButton}</button>
    </div>
);