import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const PostDetailPage = () => {
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState();
    const [post, setPost] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        setIsLoading(true);
        setPost(undefined);

        fetch(`http://localhost:8000/api/v1/blogPosts/${id ?? 1}`)
            .then(async (response) => {
                console.log("res", response);
                if (response.status === 404) {
                    setPost(undefined);
                } else {
                    const data = await response.json();
                    setPost(data[0]);
                }
            })
            .catch((error) => console.error(error))
            .finally(() => setIsLoading(false));
    }, [id]);

    function handleDelete(e) {
        e.preventDefault();
        async function deletePost(id) {
            const { data } = await axios.delete(
                `http://localhost:8000/api/v1/blogPosts/${id}`
            );
            console.log(data);
        }
        deletePost(id);
        navigate("/blog");
    }

    return isLoading ? (
        <div>
            <p>post is loading ...</p>
        </div>
    ) : (
        <>
            {post && (
                <>
                    <Navbar />
                    <div className="bg-black text-white rounded-sm text-justify flex justify-center items-center flex-col  h-screen w-auto font-monda p-6 ">
                        <div
                            className="border h-2/3 w-1/2 p-4"
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                position: "relative",
                            }}
                        >
                            <h1 className="text-xl font-bold mt-4">
                                {post.name}
                            </h1>
                            <p className="text-sm text-gray-600">
                                {post.author}
                            </p>
                            <p className="mt-4">{post.content}</p>
                            <p className="text-sm text-right text-gray-600">
                                {new Date(post.date).toLocaleDateString()}
                            </p>

                            <div className="flex items-end bottom-5 right-5 gap-4  space-x-2 absolute mt-6">
                                <button
                                    className="bg-black text-white text-sm border 
                                    hover:bg-white hover:text-black font-bold py-2 px-4  "
                                    onClick={() =>
                                        console.log("Edit button clicked")
                                    }
                                >
                                    Edit
                                </button>
                                <button
                                    className="bg-black text-white text-sm border 
                                    hover:bg-white hover:text-black font-bold py-2 px-4 "
                                    onClick={handleDelete}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            )}

            {post === undefined && (
                <div>
                    <p>no post available</p>
                </div>
            )}
        </>
    );
};
