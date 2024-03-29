import React from "react";

const Pagination = ({
  prevPage,
  nextPage,
  goPrevPage,
  onNext,
  goFirstPage,
  goLastPage,
  totalPages,
  disabledButton,
}) => {
  const pageWord = "page=";
  let wordPosition;
  let actualPage;
  if (nextPage !== null) {
    wordPosition = nextPage.indexOf(pageWord);
    actualPage = parseInt(nextPage.slice(wordPosition + 5)) - 1;
  } else {
    wordPosition = prevPage.indexOf(pageWord);
    actualPage = parseInt(prevPage.slice(wordPosition + 5)) + 1;
  }
  const stringActualPage = actualPage.toString();
  const stringTotalPages = totalPages.toString();

  return (
    <nav>
      <ul className="pagination">
        {prevPage && (
          <>
            <li className="pagination__li">
              <button
                className="pagination__li--button"
                disabled={disabledButton}
                onClick={goFirstPage}
              >
                <i className="fa-solid fa-backward-fast"></i> First
              </button>
            </li>
            <li className="pagination__li">
              <button
                className="pagination__li--button"
                disabled={disabledButton}
                onClick={goPrevPage}
              >
                <i className="fa-solid fa-backward"></i> Prev
              </button>
            </li>
          </>
        )}
        <p className="pagination__info">
          Page{" "}
          <span className="pagination__info--number">{stringActualPage}</span>{" "}
          of{" "}
          <span className="pagination__info--number">{stringTotalPages}</span>
        </p>
        {nextPage && (
          <>
            <li>
              <button
                className="pagination__li--button"
                disabled={disabledButton}
                onClick={onNext}
              >
                Next <i className="fa-solid fa-forward"></i>
              </button>
            </li>
            <li>
              <button
                className="pagination__li--button"
                disabled={disabledButton}
                onClick={goLastPage}
              >
                Last <i className="fa-solid fa-forward-fast"></i>
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};
export default Pagination;
