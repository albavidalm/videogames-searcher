import Skeleton from "react-loading-skeleton";
import Pagination from "./Pagination";

const GamesListSkeleton = ({
  cards,
  prevPage,
  nextPage,
  goPrevPage,
  onNext,
  goFirstPage,
  goLastPage,
  totalPages,
}) => {
  const skeletonCards = () => {
    return Array(cards)
      .fill(0)
      .map((_, id) => (
        <li className="cardSK" key={id}>
          <div className="cardSK__img">
            <Skeleton height={"100%"} />
          </div>

          <div className="cardSK__title">
            <Skeleton height={16} />
          </div>
          <div className="cardSK__info">
            <Skeleton count={3} height={12} />
          </div>
        </li>
      ));
  };

  return (
    <>
      <section className="gameList">
        <Pagination
          prevPage={prevPage}
          nextPage={nextPage}
          goPrevPage={goPrevPage}
          onNext={onNext}
          goFirstPage={goFirstPage}
          goLastPage={goLastPage}
          totalPages={totalPages}
          disabledButton={true}
        />
        <ul className="cards">{skeletonCards()}</ul>
      </section>
    </>
  );
};

export default GamesListSkeleton;
