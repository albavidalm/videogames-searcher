import Game from "./Game";

export const GameList = (props) => {
  const gameElements = props.games.map((game) => {
    return <Game key={game.id} game={game} />;
  });
  return (
    <section>
      <ul className="cards">{gameElements}</ul>
    </section>
  );
};
