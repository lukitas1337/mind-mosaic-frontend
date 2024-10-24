import axios from "axios";
import { usePosts } from "../contexts/PostContext";

function CreateBlogForm() {
    const { title, author, content, dispatch } = usePosts();

    async function createNewBlog(newBlog) {
        try {
            const { data } = await axios.post(
                `http://localhost:8000/api/v1/blogPosts`,
                newBlog
            );
            console.log(data);
        } catch (error) {
            throw new Error(error);
        }
    }
    function handeSubmit(e) {
        e.preventDefault();
        const newBlog = {
            title,
            author,
            content,
        };
        createNewBlog(newBlog);
    }
    return (
        <div className="p-10 font-monda w-[100%] md:w-[30%] flex flex-col gap-[2.5rem] text-white bg-[#1e1e1e] justify-between items-center md:border-l-2 md:border-white">
            <h2 className="text-lg uppercase">New Blog Post</h2>
            <form
                className="flex flex-col justify-between items-center gap-7 w-full"
                onSubmit={handeSubmit}
            >
                <div className="inputGroup flex flex-col justify-between items-center gap-3 w-[60%]">
                    <label htmlFor="title" className="uppercase text-md">
                        Post title
                    </label>
                    <input
                        type="text"
                        value={title}
                        id="title"
                        placeholder="Write the post title"
                        className="w-full px-2 py-1 text-[#1e1e1e]"
                        onChange={(e) =>
                            dispatch({
                                type: "setTitle",
                                payload: e.target.value,
                            })
                        }
                    />
                </div>
                <div className="inputGroup flex flex-col justify-between items-center gap-3 w-[60%]">
                    <label htmlFor="author" className="uppercase text-md">
                        author
                    </label>
                    <input
                        type="text"
                        value={author}
                        id="author"
                        placeholder="Write the author's name"
                        className="w-full px-2 py-1 text-[#1e1e1e]"
                        onChange={(e) =>
                            dispatch({
                                type: "setAuthor",
                                payload: e.target.value,
                            })
                        }
                    />
                </div>
                <div className="inputGroup flex flex-col justify-between items-center gap-3 w-[60%]">
                    <label htmlFor="content" className="uppercase text-md">
                        author
                    </label>
                    <textarea
                        type="text"
                        value={content}
                        id="content"
                        placeholder="What is the post about?"
                        className="w-full px-2 py-1 h-[12.5rem] text-[#1e1e1e]"
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
                    className="btn rounded-none bg-white uppercase text-[#1e1e1e] w-[60%] my-3 hover:bg-[#1e1e1e] hover:text-white hover:border-2 border-white"
                >
                    submit post
                </button>
            </form>
        </div>
    );
}

export default CreateBlogForm;
