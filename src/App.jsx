import { BlogCardsView } from "./components/BlogCardsView";
import { testPosts } from "./testPosts";

const App = () => {

    return (
        <div className="font-bold underline">
            <BlogCardsView posts={testPosts} />
        </div>
    )
}

export default App