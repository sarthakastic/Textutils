import React from "react";

export default function About(props) {
  return (
    <div className="container">
      <h1
        className="my-2"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        About Us
      </h1>

      <div
        class="accordion-body"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <p>
          This is a text utility app developed using React JS and Bootstrap.{" "}
          <br />
          It is fully responsive and can be used to do different tasks like
          changing a text to lowercase or changing the text to uppercase.
          <br /> Here you get two modes as Light mode or Dark mode which you can
          choose according to your convenience.
        </p>
      </div>
    </div>
  );
}
