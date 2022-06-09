import Game from "./Game";

const GameList = (props) => {
  const gameElements = props.games.map((game) => {
    return <Game key={game.id} game={game} />;
  });
  return (
    <>
      <section>
        <ul className="cards">{gameElements}</ul>
      </section>

      <div className="container">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href="#" className="container__link">
          <i className="fa-solid fa-arrow-up"></i>
        </a>
      </div>
    </>
  );
};

export default GameList;
