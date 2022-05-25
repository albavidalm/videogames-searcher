import React from "react";

const Pagination = (previous, next) => {
  const handlePrev = () => {};
  const handleNext = () => {};
  return (
    <nav>
      <ul className="pagination">
        {previous && (
          <li className="pagination__li">
            <button className="pagination__li--button" onClick={handlePrev}>
              ⏪Prev
            </button>
          </li>
        )}
        {next && (
          <li>
            <button className="pagination__li--button" onClick={handleNext}>
              Next⏩
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Pagination;
