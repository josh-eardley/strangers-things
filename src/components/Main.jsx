import { React, useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Posts, Login, NavBar, Profile, Register } from ".";
import { fetchPosts } from "../api/index"

const Main = () => {
    const [posts, setPosts] = useState([]);
    const [user, setUser] = useState({});
    const [token, setToken] = useState(localStorage.token);
    const [IsLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    useEffect(() => {
        const fetchInitialData = async () => {
            const returnedPosts = await fetchPosts();
            setPosts(returnedPosts.data.posts);
            console.log(returnedPosts)
        }
        fetchInitialData();
    }, []); 

    return (
        <>
        <NavBar setIsLoggedIn={setIsLoggedIn} setUser={setUser} setToken={setToken}/>
        <Routes>
            <Route path="/" element={<Posts posts = {posts} token={token} IsLoggedIn={IsLoggedIn} user={user}/>}></Route>
            <Route path="/auth/login" element={<Login  setIsLoggedIn={setIsLoggedIn} setUser={setUser} setToken={setToken} username={username} setUsername={setUsername} password={password} setPassword={setPassword} />}></Route>
            <Route path="/auth/register" element={<Register setUser={setUser} setToken={setToken} setIsLoggedIn={setIsLoggedIn} username={username} setUsername={setUsername} password={password} setPassword={setPassword}/>}></Route>
            <Route path="/profile" element={<Profile posts = {posts} />}> </Route>
        </Routes>
        </>
    )
}

export default Main;