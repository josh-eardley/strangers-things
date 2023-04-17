const APIURL = "https://strangers-things.herokuapp.com/api/2303-ftb-et-web-ft"

export const registerUser = async () => {
    try {
      const response = await fetch(`${APIURL}/users/register`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user: {
            username: 'username',
            password: 'password'
          }
        })
      });
      const result = await response.json();
      console.log(result)
      return result;
    } catch (Error) {
      console.log(Error);
    }
  }

  export const login = async (userObject) => {
    try {
      const response = await fetch(`${APIURL}/users/login`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userObject)
      });
      const result = await response.json();
    //   console.log(result);
      const { success, error, user } = await getMe(result.data.token);
      localStorage.setItem('token', result.data.token);
      return { token:result.data.token, user };
    } catch (err) {
      console.error(err);
    }
  }

  export const getMe = async (token) => {
    try {
      const response = await fetch(`${APIURL}/users/me`, {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
  
      const { success, error, data } = await response.json();
    //   console.log({ success, error, data });
  
      return { success, error, user: data };
    } catch (error) {
      console.error(error);
    }
  };