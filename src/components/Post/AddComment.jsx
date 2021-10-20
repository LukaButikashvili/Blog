import React, { useState } from "react";
import Modal from "../Modal";

const AddComment = ({ postId, setComments }) => {
  const [showModal, setShowModal] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const postData = (e) => {
    e.preventDefault();
    setButtonDisabled(true);

    let values = {
      name: e.target.name.value,
      email: e.target.email.value,
      body: e.target.body.value,
      postId,
    };

    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`, {
      method: "POST",
      body: JSON.stringify({
        body: values.body,
        email: values.email,
        name: values.name,
        postId: postId,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        alert("Comment was successfully added");
        return setComments((prevState) => [...prevState, data]);
      })
      .catch((err) => {
        alert("Something went wrong");
      });
    setShowModal(false);

    setButtonDisabled(false);
  };

  return (
    <>
      <div>
        <button onClick={() => setShowModal(true)}>Add Comment</button>
        {showModal ? (
          <Modal>
            <div className="overlay-styles" />
            <div className="modal">
              <form onSubmit={postData}>
                <input type="text" name="name" placeholder="name" required />
                <input type="email" name="email" placeholder="email" required />
                <textarea name="body" placeholder="comment" required />
                <div className="modal-buttons">
                  <input
                    type="submit"
                    value="Submit"
                    disabled={buttonDisabled}
                  />
                  <button onClick={() => setShowModal(false)}>Close</button>
                </div>
              </form>
            </div>
          </Modal>
        ) : null}
      </div>
    </>
  );
};

export default AddComment;
