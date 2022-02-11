import { v4 as uuidv4 } from "uuid";
import React, { useState } from "react";
import Form from "./components/Form";
import Table from "./components/Table";

import "./App.css";

const App = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState("");
  const [currentBookId, setCurrentBookId] = useState(null);
  const [books, setBooks] = useState([]);

  const isFunctionInvalid = () => {
    return title.trim() === "" || author.trim() === "" || isbn.trim() === "";
  };

  const clearInputs = () => {
    setTitle("");
    setAuthor("");
    setIsbn("");
  };

  const addBook = () => {
    setBooks([
      ...books,
      {
        title,
        author,
        isbn,
        id: uuidv4(),
      },
    ]);
  };

  const editBook = (book) => {
    setTitle(book.title);
    setAuthor(book.author);
    setIsbn(book.isbn);
    setCurrentBookId(book.id);
  };

  const updateBook = () => {
    setBooks(
      books.map((book) =>
        book.id === currentBookId
          ? { ...books, title: title, author: author, isbn: isbn }
          : book
      )
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    clearInputs();
    setCurrentBookId(null);
    if (isFunctionInvalid()) {
      return;
    }
    !currentBookId ? addBook() : updateBook();
  };

  const deleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  const cancelEdit = () => {
    clearInputs();
    setCurrentBookId(null);
  };

  return (
    <div className="App">
      <div className="container">
        <Form
          title={title}
          setTitle={setTitle}
          author={author}
          setAuthor={setAuthor}
          isbn={isbn}
          setIsbn={setIsbn}
          currentBookId={currentBookId}
          handleSubmit={handleSubmit}
          cancelEdit={cancelEdit}
        />
        <Table books={books} deleteBook={deleteBook} editBook={editBook} />
      </div>
    </div>
  );
};

export default App;
