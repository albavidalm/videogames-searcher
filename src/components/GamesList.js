import Game from "./Game";
import NotFoundSearch from "./NotFoundSearch";

const GamesList = ({ games, favorites, favoriteGame, isLoading }) => {
  //console.log("in GameList ->" + isLoading);
  const gameElements = () => {
    if ((games.length === 0) & !isLoading) {
      return <NotFoundSearch />;
    } else {
      return games.map((game) => {
        return (
          <Game
            key={game.id}
            game={game}
            favorites={favorites}
            favoriteGame={favoriteGame}
          />
        );
      });
    }
  };

  return (
    <>
      <section>
        <ul className="cards">{gameElements()} </ul>
      </section>
      {!isLoading && (
        <div className="container">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#" className="container__link">
            <i className="fa-solid fa-arrow-up"></i>
          </a>
        </div>
      )}
    </>
  );
};

export default GamesList;
