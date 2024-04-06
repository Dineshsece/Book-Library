import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Seebook.css'; 

const Seebook= () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Fetch books from the backend API
    const fetchBooks = async () => {
      try {
        const response = await axios.get('http://localhost:3000/'); // Adjust the endpoint based on your backend route
        setBooks(response.data); // Set the fetched books in state
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, []); // Run once on component mount

  return (
    <div className="books-list-container">
      <h2>Books Collection</h2>
      <div className="books-list">
        {books.map((book, index) => (
          <div key={index} className="book-item">
             <p><img src={book.image} alt="" srcset="" /></p>
            <h3>{book.title}</h3>
            <p>Author: {book.author}</p>
            <p>Pages: {book.pages}</p>
            <p>description:{book.description}</p>
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default Seebook;
