import React, { useContext, useEffect, useState } from "react";
import { Container, Row } from "react-grid-system";

import { BlogsContext } from "../../context/BlogsContext";
import Blog from "../Blog";
import LoadMoreButton from "../LoadMoreButton";

const UserBlogs = () => {
  const [userBlogs, setUserBlogs] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  const { userData } = useContext(BlogsContext);

  useEffect(() => {
    const fetchUserPost = async () => {
      fetch(
        `https://jsonplaceholder.typicode.com/posts/?userId=${userData.id}&?_page=${pageNumber}&_limit=12`
      )
        .then((res) => res.json())
        .then((data) => setUserBlogs(data));
    };
    fetchUserPost();
  }, [userData.id, pageNumber]);

  return (
    <Container>
      <h1>User Posts</h1>
      <Row justify="center" style={{ height: "300px" }} debug>
        {userBlogs.map((blog) => {
          return (
            <Blog
              key={blog.id}
              title={blog.title}
              id={blog.id}
              userId={blog.userId}
            />
          );
        })}
        <br />
        <LoadMoreButton length={userBlogs} changePageNumber={setPageNumber} />
      </Row>
    </Container>
  );
};

export default UserBlogs;
