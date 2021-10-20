import React, { useContext, useEffect, useState } from "react";
import { css } from "@emotion/react";
import BeatLoader from "react-spinners/ClipLoader";

import { BlogsContext } from "../../context/BlogsContext";
import CommentSection from "../../components/Post/CommentSection";
import PostInfo from "../../components/Post/PostInfo";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Post = () => {
  const { post } = useContext(BlogsContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, [post]);

  return (
    <>
      {loading ? (
        <BeatLoader loading={loading} css={override} size={150} />
      ) : (
        <div className="PostInfo-main-div">
          <PostInfo post={post} />
          <CommentSection postId={post.id} />
        </div>
      )}
    </>
  );
};

export default Post;
