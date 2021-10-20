import React from "react";
import { Row, Col } from "react-grid-system";

const LoadMoreButton = ({ length, increasePageNumber }) => {
  return (
    <>
      {length % 12 === 0 ? (
        <Row
          justify="center"
          style={{ height: "4rem", width: "10rem" }}
          className="button-wrapper-row"
          debug
        >
          <Col xs={12} sm={12} debug>
            <button
              className="read-more-button"
              onClick={() => increasePageNumber((prevNumber) => prevNumber + 1)}
            >
              Load More!
            </button>
          </Col>
        </Row>
      ) : null}
    </>
  );
};

export default LoadMoreButton;
