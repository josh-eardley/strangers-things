import react, { useState, useEffect } from "react";
import { PostsSearch, Posts, Login } from ".";
import { fetchPosts } from "../api/index"


const Main = () => {
    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        const fetchInitialData = async () => {
            const returnedPosts = await fetchPosts();
            console.log(returnedPosts);
            setPosts(returnedPosts.data.posts);
        }
        fetchInitialData();
    }, []); 

    return (
        <>
        <Login />
        <PostsSearch />
        <Posts posts = {posts} />
        </>
    )
}

export default Main;