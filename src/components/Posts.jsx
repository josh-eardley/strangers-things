import PostsSearch from "./PostsSearch";

const Posts = (props) => {
console.log(props);
    return (
        <>
        <PostsSearch />
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