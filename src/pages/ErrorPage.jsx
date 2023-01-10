import React from "react";
import { Link } from "react-router-dom";
import "../styles/Error.css";

function ErrorPage() {
  return (
    <div className="error">
      404 Not Found!
      <Link className="href" to="/">
        {" "}
        Go Home
      </Link>
    </div>
  );
}

export default ErrorPage;
