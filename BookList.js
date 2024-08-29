import React from "react";
import ReactDOM from "react-dom/client";

const BookList = () => {
  return (
    <>
      <section>
        <Book />
      </section>
    </>
  );
};

const Book = () => {
  return (
    <article>
      <Images />
      <Title />
      <Author />
    </article>
  );
};

const Images = () => <h2>image placeholder</h2>;
const Title = () => <h2>Book Title</h2>;
const Author = () => {
  return <h4>Author Name</h4>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);

