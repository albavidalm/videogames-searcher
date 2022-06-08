import React from "react";

const Pagination = ({ prevPage, nextPage, onPrevious, onNext }) => {
  const handlePrev = () => {
    onPrevious();
  };
  const handleNext = () => {
    onNext();
    // console.log(nextPage);
  };

  return (
    <nav>
      <ul className="pagination">
        {prevPage && (
          <li className="pagination__li">
            <button className="pagination__li--button" onClick={handlePrev}>
              ⏪Prev
            </button>
          </li>
        )}
        {nextPage && (
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
