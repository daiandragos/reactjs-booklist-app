import React from "react";

const TableCell = ({ fieldName, actionsCell, deleteBook, editBook }) => {
  return (
    <div className="table-cell">
      {fieldName}
      {/* render the edit and delete actions only in the cells marked as 'actionsCell' */}
      {actionsCell && (
        <>
          <i onClick={editBook} className="far fa-edit"></i>
          <i onClick={deleteBook} className="far fa-trash-alt"></i>
        </>
      )}
    </div>
  );
};

export default TableCell;
