import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";

const PostContext = createContext();

const initialState = { posts: [], title: "", author: "", content: "" };
function reducer(state, action) {
    switch (action.type) {
        case "setTitle":
            return { ...state, title: action.payload };
        case "setAuthor":
            return { ...state, author: action.payload };
        case "setContent":
            return { ...state, content: action.payload };
        case "setPosts":
            return { ...state, posts: action.payload };
        default:
            return state;
    }
}
function PostProvider({ children }) {
    const [{ posts, title, author, content }, dispatch] = useReducer(
        reducer,
        initialState
    );

    useEffect(function () {
        async function getPosts() {
            try {
                const { data } = await axios.get(
                    "http://localhost:5001/api/v1/blogPosts"
                );

                dispatch({ type: "setPosts", payload: data });
            } catch (error) {
                throw new Error(error);
            }
        }
        getPosts();
    }, []);
    return (
        <PostContext.Provider
            value={{ posts, title, author, content, dispatch }}
        >
            {children}
        </PostContext.Provider>
    );
}

function usePosts() {
    const context = useContext(PostContext);
    if (context === "undefined")
        throw new Error("context is not used properly");
    return context;
}

export { PostProvider, usePosts };
