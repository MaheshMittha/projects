import React from "react"
import ReactDOM from "react-dom/client"
import './index.css'


const BookList = ()=>{
    return <section className="booklist">
        <Book/>
        <Book/>
        <Book/>
        <Book/>
    </section>
}

const Book = () => {
return (
    <article className="book" >
    <Images/>
    <Title/>
    <Author/>
</article>
)
}


const Images = ()=> <img src="https://m.media-amazon.com/images/I/816tHvSrjTL._AC_UL320_.jpg" alt="" srcset="" />
const Title = ()=> <h2>The Book of Lost Friends: A Novel</h2>
const Author = ()=> {
    return <h2>by Lisa Wingate</h2>
}  

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<BookList/>) 


// https://m.media-amazon.com/images/I/816tHvSrjTL._AC_UL320_.jpg
// Title : The Book of Lost Friends: A Novel
// Author : by Lisa Wingate


// https://m.media-amazon.com/images/I/8196jTFIdLL._AC_UL320_.jpg
// Title : The Paper Palace (Reese's Book Club): A Novel
// Author : by Miranda Cowley Heller

// https://m.media-amazon.com/images/I/71AK2394CFL._AC_UL320_.jpg
// Title : The Vanishing Half: A GMA Book Club Pick (A Novel)
// Author : by Brit Bennett

