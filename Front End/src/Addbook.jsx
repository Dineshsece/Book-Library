import React, { useState } from 'react';
import axios from 'axios';

const Addbook = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [pages, setPages] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !author || !pages || !description || !image) {
      alert('Please fill in all fields');
      return;
    }
    const savedBook = {
      title: title,
      author: author,
      description: description,
      image: image,
      pages: parseInt(pages)
    };
    try {
      const response = await axios.post('http://localhost:3000/create', savedBook);
      // Call the callback function passed from the parent component
      // Assuming your backend returns the newly added book data
      // Clear the form fields
      alert("Book added to collection");
      setTitle('');
      setAuthor('');
      setDescription('');
      setImage('');
      setPages('');
    } catch (error) {
      console.error('Error adding book:', error);
      alert('Error adding book. Please try again.'); // Display an error message if the request fails
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <label>
        Author:
        <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
      </label>
      <label>
        Description:
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
      </label>
      <label>
        Image URL:
        <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
      </label>
      <label>
        Pages:
        <input type="number" value={pages} onChange={(e) => setPages(e.target.value)} />
      </label>
      <button type="submit">Add Book</button>
    </form>
  );
};

export default Addbook;
