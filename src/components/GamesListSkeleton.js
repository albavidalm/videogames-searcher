import Skeleton from "react-loading-skeleton";

const GamesListSkeleton = ({ cards }) => {
  const skeletonCards = () => {
    return Array(cards)
      .fill(0)
      .map((_, id) => (
        <li className="card" key={id}>
          <div className="card__container--img">
            <Skeleton max-width={416} height={128} />
          </div>

          <div>
            <Skeleton count={4} height={12} />
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
