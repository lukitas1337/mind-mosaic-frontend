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
        <div className="bg-white rounded-lg shadow-lg p-6 m-4 max-w-xs">
            <h1 className="text-xl font-bold mt-4">
                {post.title}
            </h1>
            <p className="mt-4">{post.content}</p>
            <p className="text-sm text-gray-600">{new Date(post.date).toLocaleDateString()}</p>
        </div>
    )
}