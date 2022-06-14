import React from "react";

const Pagination = ({ prevPage, nextPage, onPrevious, onNext, totalGames }) => {
  const handlePrev = () => {
    onPrevious();
  };
  const handleNext = () => {
    //debugger;
    onNext();
    // console.log(nextPage);
  };

  return (
    <nav>
      <ul className="pagination">
        {prevPage && (
          <li className="pagination__li">
            <button className="pagination__li--button" onClick={handlePrev}>
              <i className="fa-solid fa-backward"></i> Prev
            </button>
          </li>
        )}
        <p className="pagination__info">
          Page of{" "}
          <span className="pagination__info--number">
            {Math.floor(totalGames / 20) + 1}
          </span>
        </p>
        {nextPage && (
          <li>
            <button className="pagination__li--button" onClick={handleNext}>
              Next <i className="fa-solid fa-forward"></i>
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Pagination;
