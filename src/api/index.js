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

export const makePost = async (postObject) => {

    try {
      const response = await fetch(`${APIURL}/posts`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(postObject)
      });
      const result = await response.json();
      console.log(result);
      return result
    } catch (err) {
      console.error(err);
    }
  }
