const APIURL = "https://strangers-things.herokuapp.com/api/2303-ftb-et-web-ft"

export const fetchPosts = async () => {
    try {
        const response = await fetch(`${APIURL}/posts`);
        const result = await response.json();
        return result;
    } catch(Error) {
        console.log(Error);
    }
}
