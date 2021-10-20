import React from "react";

const Comment = ({ name, body, email }) => {
  return (
    <>
      <div className="comment-wrapper">
        <div>
          <h1>{name}</h1>
          <h2>{email}</h2>
        </div>
        <div>
          <h3>{body}</h3>
        </div>
      </div>
    </>
  );
};

export default Comment;
