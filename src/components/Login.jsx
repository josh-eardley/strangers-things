import React, { useState, useEffect } from "react"
import { login } from "../api/auth"

 const Login = ({setIsLoggedIn, setToken, setUser, username, setUsername, password, setPassword}) => {

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        const userToAuth = { user: { username: username, password: password } };
        const data = await login(userToAuth);
        console.log(data);

        if(data.user) {
            setUser(data.user);
            setToken(data.token);
            setIsLoggedIn(true);
        }
        
    }
    
    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="">Username</label>
            <input type="text" value={username} onChange={(event) => setUsername(event.target.value)}/>

            <label htmlFor="">Password</label>
            <input type="text" value={password} onChange={(event) => setPassword(event.target.value)} />
            <button type="submit">Log In</button>
        </form>
    )
}


export default Login