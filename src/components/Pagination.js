import React from "react";

const Pagination = ({ prevPage, nextPage, goPrevPage, onNext, totalGames }) => {
  const pageWord = "page=";
  let wordPosition;
  let actualPage;
  if (nextPage !== null) {
    wordPosition = nextPage.indexOf(pageWord);
    actualPage = parseInt(nextPage.slice(wordPosition + 5)) - 1;
    console.log(actualPage);
  } else {
    wordPosition = prevPage.indexOf(pageWord);
    actualPage = parseInt(prevPage.slice(wordPosition + 5)) + 1;
    console.log(actualPage);
  }

  return (
    <nav>
      <ul className="pagination">
        {prevPage && (
          <li className="pagination__li">
            <button className="pagination__li--button" onClick={goPrevPage}>
              <i className="fa-solid fa-backward"></i> Prev
            </button>
          </li>
        )}
        <p className="pagination__info">
          Page <span className="pagination__info--number">{actualPage}</span> of{" "}
          <span className="pagination__info--number">
            {Math.floor(totalGames / 20) + 1}
          </span>
        </p>
        {nextPage && (
          <li>
            <button className="pagination__li--button" onClick={onNext}>
              Next <i className="fa-solid fa-forward"></i>
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};
export default Pagination;
