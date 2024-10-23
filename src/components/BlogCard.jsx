export const BlogCard = ({ name, author, content, date, readMoreButton, onClicked }) => (
    <div className="bg-white rounded-sm shadow-lg p-6 m-12 text-justify font-monda max-w-xs">
        <h1 className="text-xl font-bold  mt-4">
            {name}
        </h1>
        <p className="text-sm text-gray-600">{author}</p>
        <p className="mt-4">{content}</p>

        <p className="text-sm p-2 text-right text-gray-600">{new Date(date).toLocaleDateString()}</p>
        <button
            className="text-white text-sm bg-black font-bold py-2 px-4 mt-2 shadow-md hover:bg-white hover:text-black hover:shadow-lg focus:outline-none transition-all duration-300"
            onClick={onClicked}
            onClick={() => onClicked()}
        >
            {readMoreButton || "READ MORE..."}
        </button>
    </div >
);