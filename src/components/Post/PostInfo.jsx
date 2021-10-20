import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { BlogsContext } from "../../context/BlogsContext";

const PostInfo = ({ post }) => {
  const { userData } = useContext(BlogsContext);

  return (
    <>
      <div>
        <div className="PostInfo-title-div">
          <h1>{post.title}</h1>
        </div>
        <div className="PostInfo-username-div">
          <h1>
            Author: <Link to="/User">{userData.username}</Link>
          </h1>
        </div>
      </div>
      <div>
        <div className="PostInfo-img-div">
          <img src={`https://picsum.photos/id/${post.id}/200/300`} alt="blog" />
        </div>
        <div className="PostInfo-body-div">
          <h1>{post.body}</h1>
        </div>
      </div>
    </>
  );
};

export default PostInfo;
