import React, { useContext } from "react";
import { Container, Row } from "react-grid-system";

import Blog from "../../components/Blog";
import LoadMoreButton from "../../components/LoadMoreButton";
import { BlogsContext } from "../../context/BlogsContext";

const Blogs = () => {
  const { blogs, setPageNumber } = useContext(BlogsContext);

  return (
    <>
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
    </>
  );
};

export default Blogs;
