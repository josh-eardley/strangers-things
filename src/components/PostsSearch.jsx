import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const PostsSearch = () => {
  const [search, setSearch] = useState('');

  const handleChange = (event) => {
    setSearch(event.target.value)
  }

  return (
    <div id='postsSearch'>
      <h2 id='postsHeader'>Posts</h2>
      <div id='navbar'>
      </div>
      <form>
        <input type='text' name='PostsSearch' value={search} onChange={handleChange} />
      </form>
    </div>
  )
}

export default PostsSearch;