import React, { useContext } from "react";
import { Col } from "react-grid-system";
import { useHistory } from "react-router-dom";
import { BlogsContext } from "../context/BlogsContext";

const Blog = ({ title, id, userId }) => {
  const history = useHistory();
  const { fetchUser, findPost } = useContext(BlogsContext);

  const redirectToPostPage = (id, userId) => {
    fetchUser(userId);
    findPost(id);
    history.push(`/Post/${id}`);
  };

  return (
    <Col xs={3} debug>
      <div className="post-wrapper-div">
        <div>
          <img src={`https://picsum.photos/id/${id}/200/300`} alt="blog" />
        </div>
        <h1>{title}</h1>
        <button onClick={() => redirectToPostPage(id, userId)}>Read</button>
      </div>
    </Col>
  );
};

export default Blog;
