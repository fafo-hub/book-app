import React from 'react';
import './App.css';
import Homepage from './components/homepage';
import  MoreInfo from "./components/moreInfo";
import {useState, useEffect} from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ReadMore from './components/readMore';
import Navbar from "./components/Navbar"

function App() {

  //For what the user type in the input box
  const [UserInput, setUserInput] = useState('');

  //For the books returned by the API call
  const [Books, setBooks] = useState([])



  //Function to get html content of the input box
  const showMain = (e) => {
    setUserInput(e.target.value)
    //console.log(UserInput);
  }


  //API with useEffect, and UserInput is our dependency array because our rendering depends on it
  useEffect(() => () => {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${UserInput}&maxResults=40&key=AIzaSyBuwxHeRrb6JhyDAHqCq8lkWWazlbquHxM`)
      .then((response) => response.json())
      .then((data) => {
        setBooks(data)
      })
  }, [UserInput]);



  return (
    <Router>
      <section className="main-container">
        {/* <Navbar /> */}
        <Routes>
          <Route path="*" element={<Homepage showMain = {showMain}/>} />
          <Route path="/moreinfo" element={<MoreInfo Books = {Books} />} />
          <Route path='/readmore/:id' element={<ReadMore/>}/>
          {/* <Route path="/apicall/:id" element={<MoreInfo />} /> */}
        </Routes>
      </section>
    </Router>
  );
}

export default App;
