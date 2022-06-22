import Skeleton from "react-loading-skeleton";

const GamesListSkeleton = ({ cards }) => {
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
    <section>
      <ul className="cards">{skeletonCards()}</ul>
    </section>
  );
};

export default GamesListSkeleton;
