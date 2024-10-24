import { useReducer, useEffect } from "react";
import axios from "axios";

const initialState = { name: "", author: "", content: "" };

function reducer(state, action) {
    switch (action.type) {
        case "setname":
            return { ...state, name: action.payload };
        case "setAuthor":
            return { ...state, author: action.payload };
        case "setContent":
            return { ...state, content: action.payload };
        case "setBlog":
            return {
                ...state,
                name: action.payload.name,
                author: action.payload.author,
                content: action.payload.content,
            };
        default:
            return state;
    }
}

function EditBlogForm({ blogId, setModalClose }) {
    const [{ name, author, content }, dispatch] = useReducer(
        reducer,
        initialState
    );

    useEffect(() => {
        async function fetchBlog() {
            try {
                const { data } = await axios.get(
                    `http://localhost:5001/api/v1/blogPosts/${blogId}`
                );
                dispatch({ type: "setBlog", payload: data[0] });
            } catch (error) {
                console.error("Error fetching blog details!", error);
            }
        }
        if (blogId) {
            fetchBlog();
        }
    }, [blogId]);

    async function updateBlog(updatedBlog) {
        try {
            const { data } = await axios.put(
                `http://localhost:5001/api/v1/blogPosts/${blogId}`,
                updatedBlog
            );
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        const updatedBlog = {
            id: blogId,
            name,
            author,
            content,
        };
        updateBlog(updatedBlog);
    }

    return (
        <div className="absolute top-[5rem] md:right-[30%] p-10 font-monda w-[95%] md:w-[30%] flex flex-col gap-[2.5rem] text-[#1e1e1e] bg-[#ffffff] justify-between items-center border border-[#1e1e1e]">
            <h2 className="text-lg uppercase text-[#1e1e1e]">Edit Post</h2>
            <form
                className="flex flex-col justify-between items-center gap-7 w-full"
                onSubmit={handleSubmit}
            >
                <div className="inputGroup flex flex-col justify-between items-center gap-3 w-[60%]">
                    <label
                        htmlFor="name"
                        className="uppercase text-md text-[#1e1e1e]"
                    >
                        Post name
                    </label>
                    <input
                        type="text"
                        value={name}
                        id="name"
                        placeholder="Change the post name if needed"
                        className="w-full px-2 py-1 text-[#1e1e1e] border border-[#1e1e1e] bg-white placeholder-black" // Ensure placeholder is black
                        onChange={(e) =>
                            dispatch({
                                type: "setname",
                                payload: e.target.value,
                            })
                        }
                    />
                </div>
                <div className="inputGroup flex flex-col justify-between items-center gap-3 w-[60%]">
                    <label
                        htmlFor="author"
                        className="uppercase text-md text-[#1e1e1e]"
                    >
                        Author
                    </label>
                    <input
                        type="text"
                        value={author}
                        id="author"
                        placeholder="Change the author's name if needed"
                        className="w-full px-2 py-1 text-[#1e1e1e] border border-[#1e1e1e] bg-white placeholder-black" // Ensure placeholder is black
                        onChange={(e) =>
                            dispatch({
                                type: "setAuthor",
                                payload: e.target.value,
                            })
                        }
                    />
                </div>
                <div className="inputGroup flex flex-col justify-between items-center gap-3 w-[60%]">
                    <label
                        htmlFor="content"
                        className="uppercase text-md text-[#1e1e1e]"
                    >
                        Content
                    </label>
                    <textarea
                        value={content}
                        id="content"
                        placeholder="Change the post content if needed!"
                        className="w-full px-2 py-1 h-[12.5rem] text-[#1e1e1e] border border-[#1e1e1e] bg-white placeholder-black" // Ensure placeholder is black
                        onChange={(e) =>
                            dispatch({
                                type: "setContent",
                                payload: e.target.value,
                            })
                        }
                    />
                </div>
                <button
                    type="submit"
                    className="btn rounded-none bg-white text-[#1e1e1e] w-[60%] my-3 border border-[#1e1e1e] hover:bg-[#1e1e1e] hover:text-white"
                >
                    Submit Post
                </button>{" "}
            </form>
            <button
                className="absolute top-[3rem] right-[3rem]"
                onClick={() => setModalClose(false)}
            >
                {" "}
                X{" "}
            </button>
        </div>
    );
}

export default EditBlogForm;
