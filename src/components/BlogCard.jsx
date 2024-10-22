export const BlogCard = ({ name, author, content, date, readMoreButton, onClicked }) => (
    <div className="bg-white rounded-lg shadow-lg p-6 m-4 max-w-xs">
        <h1 className="text-xl font-bold mt-4">
            {name}
        </h1>
        <p className="text-sm text-gray-600">{author}</p>
        <p className="mt-4">{content}</p>
        <p className="text-sm text-gray-600">{new Date(date).toLocaleDateString()}</p>
        <button
            className="text-white bg-black"
            onClick={() => onClicked()}
        >
            {readMoreButton}
        </button>
    </div>
);