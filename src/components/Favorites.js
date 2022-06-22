import { Link } from "react-router-dom";
import BtnInFavSection from "./ui/BtnInFavSection";

const Favorites = ({ games, favorites, favoriteGame, clearFavorites }) => {
  const favoriteGames = favorites.map((favorite) => {
    const isFavorite = games.find((game) => favorite.id === game.id);
    return (
      <li key={favorite.id} className="favCard">
        <Link to={`/game/${favorite.id}`} className="favCard__link">
          <div className="favCard__container">
            <img
              src={favorite.cover}
              alt="favorite cover"
              className="favCard__container--cover"
            />
          </div>

          <h2 className="favCard__title">{favorite.name}</h2>
        </Link>
        <BtnInFavSection
          isFavorite={isFavorite}
          favoriteGame={favoriteGame}
          id={favorite.id}
        />
      </li>
    );
  });

  return (
    <section className="favorites">
      <h2 className="favorites__title">Favorites</h2>

      {favorites.length === 0 ? (
        <section className="emptyFavorites">
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
        </section>
      ) : (
        <section className="favorites__content">
          <ul className="favorites__content--cards">{favoriteGames}</ul>
          <button className="favorites__reset" onClick={clearFavorites}>
            Delete all favorites <i className="fas fa-trash-can"></i>
          </button>
        </section>
      )}
    </section>
  );
};
export default Favorites;
