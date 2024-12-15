import { useState } from "react";

function Pagination({ films, currentPage, onPageChange }) {
  const nbpage = 5;
  const totalPages = Math.ceil(films.length / nbpage);

  const next = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const previous = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  return (
    <div id="pag">
      <button onClick={previous}>Previous page</button>
      <span> Page {currentPage} of {totalPages} </span>
      <button onClick={next}>Next page</button>
    </div>
  );
}

export default Pagination;