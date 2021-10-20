import React, { useEffect, useState } from "react";
import AddComment from "./AddComment";

import Comment from "../Comment";

const CommentSection = ({ postId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        .then((res) => res.json())
        .then((data) => setComments(data));
    };

    fetchComments();
  }, [postId]);

  return (
    <>
      <div className="comments-main-div">
        <div>
          <h1>Comment Section</h1>
          <AddComment setComments={setComments} postId={postId} />
        </div>
        {comments.map((comment) => {
          return (
            <Comment
              key={comment.id}
              name={comment.name}
              body={comment.body}
              email={comment.email}
            />
          );
        })}
      </div>
    </>
  );
};

export default CommentSection;
