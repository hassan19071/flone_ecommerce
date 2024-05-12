/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

function SecondHero({ pageName }) {
  return (
    <div
      className="second-hero py-4"
      style={{ background: "rgb(248, 243, 250)" }}
    >
      <div className="container">
        <div className="links text-center">
          <Link
            to="/"
            style={{
              textTransform: "uppercase",
              color: "#555",
              fontWeight: "600",
              marginRight: "10px",
            }}
          >
            Home
          </Link>{" "}
          /
          <a
            style={{
              textTransform: "uppercase",
              color: "#000",
              fontWeight: "600",
              marginLeft: "10px",
            }}
          >
            {pageName}
          </a>
        </div>
      </div>
    </div>
  );
}

export default React.memo(SecondHero);
