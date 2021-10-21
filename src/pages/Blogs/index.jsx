import React, { useContext } from "react";
import { Container, Row } from "react-grid-system";
import { css } from "@emotion/react";
import BeatLoader from "react-spinners/ClipLoader";

import Blog from "../../components/Blog";
import LoadMoreButton from "../../components/LoadMoreButton";
import { BlogsContext } from "../../context/BlogsContext";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Blogs = () => {
  const { blogs, setPageNumber } = useContext(BlogsContext);

  return (
    <>
      {blogs.length === 0 ? (
        <BeatLoader css={override} size={150} />
      ) : (
        <Container>
          <Row justify="center" debug>
            {blogs.map((blog) => {
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
            <LoadMoreButton
              length={blogs.length}
              increasePageNumber={setPageNumber}
            />
          </Row>
        </Container>
      )}
    </>
  );
};

export default Blogs;
