export const BlogCard = ({ title, content, date, readMoreButton }) => (
    <div className="bg-white rounded-lg shadow-lg p-6 m-4 max-w-xs">
        <h1 className="text-xl font-bold mt-4">
            {title}
        </h1>
        <p className="mt-4">{content}</p>
        <p className="text-sm text-gray-600">{new Date(date).toLocaleDateString()}</p>
        <button className="text-white bg-black">{readMoreButton}</button>
    </div>
);