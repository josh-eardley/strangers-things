import { useState } from "react";
import { makePost } from "../api/index"

const Posts = (props) => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [location, setLocation] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        const postToCreate = { post: {title: title, description: description, price: price, location: location} };
        const data = await makePost(postToCreate);
        console.log(data);

        // if(data.user) {
        //     setUser(data.user);
        //     setToken(data.token);
        //     setIsLoggedIn(true);
        // }
        
    }
    return (
        <>
        <form onSubmit={handleSubmit}>Create New Post
            <label htmlFor="">Title</label>
            <input type="text" value={title} onChange={(event) => setTitle(event.target.value)}/>

            <label htmlFor="">Description</label>
            <input type="text" value={description} onChange={(event) => setDescription(event.target.value)} />

            <label htmlFor="">Price</label>
            <input type="text" value={price} onChange={(event) => setPrice(event.target.value)} />

            <label htmlFor="">Location</label>
            <input type="text" value={location} onChange={(event) => setLocation(event.target.value)} />
            <button type="submit">Submit</button>
        </form>

        <section id="postsView">
        {props.posts.map( (post) => {

            return (
        <article id="singlePost">
            <h2>{post.title}</h2>
            <p>{post.description}</p>
            <p>Price: {post.price}</p>
            <p>Seller: {post.author.username}</p>
            <p>Location: {post.location}</p>
        </article>
            )
        }
         )} 
        </ section>
        </>
    )
}

export default Posts;