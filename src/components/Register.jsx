import React, { useState, useEffect } from "react"
import { registerUser } from "../api/auth"

 const Register = ({setIsLoggedIn, setToken, setUser, username, setUsername, password, setPassword}) => {
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        
        const userToAuth = { user: { username: username, password: password } };
        const data = await registerUser(userToAuth);
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
            <button type="submit">Register</button>
        </form>
    )
}


export default Register;