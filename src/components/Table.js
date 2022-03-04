import React from "react";
import TableCell from "./TableCell";

const Table = ({ books, deleteBook, editBook }) => {
  return (
    <div className="table">
      {/* create the table header */}
      <div className="table-heading">
        <TableCell fieldName="Title" />
        <TableCell fieldName="Author" />
        <TableCell fieldName="ISBN" />
        <TableCell fieldName="Actions" />
      </div>
      {/* create the book entries */}
      {books.map((book) => (
        <div key={book.id} className="table-row">
          <TableCell fieldName={book.title} />
          <TableCell fieldName={book.author} />
          <TableCell fieldName={book.isbn} />
          <TableCell
            actionsCell
            deleteBook={() => deleteBook(book.id)}
            editBook={() => editBook(book)}
          />
        </div>
      ))}
    </div>
  );
};

export default Table;
