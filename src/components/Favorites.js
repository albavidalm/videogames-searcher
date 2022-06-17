import { Link } from "react-router-dom";
import BtnFav from "./ui/BtnFav";

const Favorites = ({ games, favorites, favoriteGame, clearFavorites }) => {
  const favoriteGames = favorites.map((favorite) => {
    const isFavorite = games.find((game) => favorite.id === game.id);
    return (
      <li key={favorite.id} className="favCard">
        <BtnFav
          isFavorite={isFavorite}
          favoriteGame={favoriteGame}
          id={favorite.id}
        />

        <Link to={`/game/${favorite.id}`}>
          <div className="favCard__container">
            <img
              src={favorite.cover}
              alt="favorite cover"
              className="favCard__container--cover"
            />
          </div>

          <h2 className="favCard__title">{favorite.name}</h2>
        </Link>
      </li>
    );
  });

  return (
    <section className="favorites">
      <h3 className="favorites__title">Favorites</h3>
      <section className="favorites__content">
        {favorites.length === 0 ? (
          <div className="emptyFavorites">
            <span className="star__small">
              <i className="fa-solid fa-star"></i>
            </span>
            <span className="star__medium">
              <i className="fa-solid fa-star"></i>
            </span>
            <span className="star__big">
              <i className="fa-solid fa-star"></i>
            </span>
            <span className="star__medium">
              <i className="fa-solid fa-star"></i>
            </span>
            <span className="star__small">
              <i className="fa-solid fa-star"></i>
            </span>

            <p>There are no games in here. Add your own!</p>
          </div>
        ) : (
          <>
            <ul className="favorites__content--cards">{favoriteGames}</ul>
            <button
              className="favorites__content--reset"
              onClick={clearFavorites}
            >
              Clear favorites
            </button>
          </>
        )}
      </section>
    </section>
  );
};
export default Favorites;
