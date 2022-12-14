import React from "react";
import "./moreInfo.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import Pagination from "./pagination";
import noImage from "../IMG/AxaTDpNTSDjnjGZzyuaKsb5OlqNw117zizIjATMe.jpeg";


const MoreInfo = ({ Books }) => {


  


    let booksArray = Books.items
    localStorage.setItem("booksData", JSON.stringify(booksArray));
  //console.log(booksArray);
  //localStorage.setItem('repoData', JSON.stringify(repo))
    
    console.log(JSON.stringify(booksArray));
  
    //States for pagination
    
  const [currentPage, setCurrentPage] = useState(1);
  const [BooksPerPage] = useState(10);

  //Pagination Variables
  const indexOfLastBooks = currentPage * BooksPerPage;
  const indexOfFirstBooks = indexOfLastBooks - BooksPerPage;
  const currentBooks = booksArray?.slice(indexOfFirstBooks, indexOfLastBooks);


  console.log(currentBooks)
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)

  };
  ;
  return (
    <section className='overall-books-container'>
      <nav className="navigation-bar">
        <Link className="logoName" to="/homepage">
          <h2>BookSearch</h2>
        </Link>
        <section>
          <ul className="nav-right">
            <li>About</li>
            <li>Contributors</li>
            <li>API docs</li>
          </ul>
        </section>
      </nav>
      <div className="books-container">
        {currentBooks.map((book, i) => (

              <div className='books' key={book.id} >
                  {book.volumeInfo.imageLinks ? <img src={book.volumeInfo.imageLinks.thumbnail} alt="book"/> : <img src= { noImage } alt="No Image" /> }
                  <h2>{book.volumeInfo.title}</h2>
                  <Link to={`/readMore/${book.id}`}>
                  <button className="read-more">
                      
                        Read More
                  </button>
                  </Link>
                  {/* <Link to={`/apiWorks/${repository.id}`}> */}
              </div>
            ))}
        </div>
        <Pagination
          Books = {booksArray}
          totalBooks= {booksArray?.length}
          currentPage = {currentPage}
          BooksPerPage = {BooksPerPage}
          paginate = {paginate}
        />


    </section>
  );
};

export default MoreInfo;
