import React, { createContext, useState, useEffect } from "react";

const BlogsContext = createContext();

const BlogContextProvider = (props) => {
  const [blogs, setBlogs] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [post, setPost] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      fetch(
        `https://jsonplaceholder.typicode.com/posts/?_page=${pageNumber}&_limit=12`
      )
        .then((res) => res.json())
        .then((data) => setBlogs((prevState) => [...prevState, ...data]));
    };

    fetchBlogs();
  }, [pageNumber]);

  const findPost = (id) => {
    let post = blogs.find((blog) => blog.id === id);
    setPost(post);
  };

  //User Context
  const [userData, setUserData] = useState([]);

  const fetchUser = async (userID) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userID}`)
      .then((res) => res.json())
      .then((data) => setUserData(data));
  };

  return (
    <BlogsContext.Provider
      value={{ blogs, post, setPageNumber, findPost, fetchUser, userData }}
    >
      {props.children}
    </BlogsContext.Provider>
  );
};

export { BlogContextProvider, BlogsContext };
