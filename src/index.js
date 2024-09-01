import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";



const author = "by Lisa Wingate"
const title = "The Book of Lost Friends: A Novel"
const img = './images/pexels-photo.jpeg'
const BookList = () => {
  return (
    <section className="booklist">
      <Book author={author} title={title} img = {img} />
      <Book author={author} title={title} img = {img} />
    </section>
  );
};

const Book = (props) => {
    console.log(props);
  return (
    <article className="book">
          <img className="img" 
          src={props.img} alt= {props.title} />
          <h2>{props.title}</h2>
          <h4>{props.author}</h4>
          {console.log(props)}
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

// 25th Ended
