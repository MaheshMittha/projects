import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// Set up variables declation for Book Component

const books = [
  {
    author: "by Lisa Wingate",
    title: "The Book of Lost Friends: A Novel",
    img: "./images/pexels-photo.jpeg",
    id : 1
  },

  {
    author: "by Miranda Cowley Heller",
    title: "The Paper Palace (Reese's Book Club): A Novel",
    img: "https://m.media-amazon.com/images/I/8196jTFIdLL._AC_UL320_.jpg",
    id : 2
  },
];

//  Rendering in BookList Component (2)
// const names = ["john" , "peter", "susan"]
// const newNames = names.map((name)=>{
//   return <h1>{names}</h1>
// })
//  console.log(newNames);

// Parent Component
const BookList = () => {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book {...book} key={book.id} />; // Map Method , on iteration data copied object
      })}
    </section>
  );
};

/* Typical Form Component (3)
const EventExample = () => {
const handleInputForm =(e)=> {
  // console.log(e);
  // console.log(e.target);
  // console.log(e.target.name);
  // console.log(e.target.value);
  console.log("Handle Input Form");
}
const handleButtonClick = ()=>{
  alert("handle button clicked");
}
const handleFormSubmit =(e)=>{
  e.preventDefault();
  console.log("Form Submitted");
}
  return (
    <section>
      <h2>Typical Form</h2>
      <form onSubmit={handleFormSubmit} >
        <input type="text" name = "product" style={{margin :  '1rem 0' }} onChange={handleInputForm} />
        <button onClick={handleFormSubmit} type="submit">Submit</button>

        <div>
        <button onClick={handleButtonClick} type="button"> Click Me</button>
        </div>

      </form>
    </section>
  )
}
*/

// Child Component
const Book = (props) => {
  const { author, title, img, } = props;


  console.log(props);
  return (
    <article className="book">
      <img className="img" src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);

// https://m.media-amazon.com/images/I/816tHvSrjTL._AC_UL320_.jpg
// Title : The Book of Lost Friends: A Novel
// Author : by Lisa Wingate

// https://m.media-amazon.com/images/I/8196jTFIdLL._AC_UL320_.jpg
// Title : The Paper Palace (Reese's Book Club): A Novel
// Author : by Miranda Cowley Heller

// https://m.media-amazon.com/images/I/71AK2394CFL._AC_UL320_.jpg
// Title : The Vanishing Half: A GMA Book Club Pick (A Novel)
// Author : by Brit Bennett

// 30 Ended
