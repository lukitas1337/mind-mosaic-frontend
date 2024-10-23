import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom';

export const PostDetailPage = () => {
    const { id } = useParams()
    const [post, setPost] = useState();

    useEffect(() => {
        fetch(`http://localhost:5001/api/v1/blogPosts/${id ?? 1}`)
            .then(response => response.json())
            .then(data => setPost(data[0]))
            .catch(error => console.error(error))
    }, [])

    return post && (
        <div className="bg-black text-white rounded-sm text-justify font-monda p-6 m-4 max-w-xs">
            <div className="border p-6 m-4">
                <h1 className="text-xl font-bold mt-4">
                    {post.name}
                </h1>
                <p className="text-sm text-gray-600">
                    {post.author}
                </p>
                <p className="mt-4 ">
                    {post.content}
                </p>
                <p className="text-sm text-right text-gray-600">
                    {new Date(post.date).toLocaleDateString()}
                </p>

                <div className="flex justify-between mt-6">
                    <button
                        className="bg-black text-white border hover:bg-white hover:text-black font-bold py-2 px-4 "
                        onClick={() => console.log('Edit button clicked')}
                    >
                        Edit
                    </button>
                    <button
                        className="bg-black text-white border hover:bg-white hover:text-black font-bold py-2 px-4 "
                        onClick={() => console.log('Delete button clicked')}
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    )
}