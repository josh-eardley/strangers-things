import { React, useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Posts, Login, NavBar, Profile, Register } from ".";
import { fetchPosts } from "../api/index"

const Main = () => {
    const [posts, setPosts] = useState([]);
    const [user, setUser] = useState({});
    const [token, setToken] = useState(localStorage.token);
    const [IsLoggedIn, setIsLoggedIn] = useState(false);
    
    useEffect(() => {
        const fetchInitialData = async () => {
            const returnedPosts = await fetchPosts();
            console.log(returnedPosts);
            setPosts(returnedPosts.data.posts);
        }
        fetchInitialData();
    }, []); 
    console.log(user);

    return (
        <>
        <NavBar setIsLoggedIn={setIsLoggedIn} setUser={setUser} setToken={setToken}/>
        <Routes>
            <Route path="/" element={<Posts posts = {posts} />}></Route>
            <Route path="/auth/login" element={<Login  setIsLoggedIn={setIsLoggedIn} setUser={setUser} setToken={setToken} />}></Route>
            <Route path="/auth/register" element={<Register setUser={setUser} setToken={setToken} setIsLoggedIn={setIsLoggedIn} />}></Route>
            <Route path="/profile" element={<Profile posts = {posts} />}> </Route>
        </Routes>
        </>
    )
}

export default Main;