import React from "react";
import { Link } from "react-router-dom";
import getIconPlatform from "../services/getIconPlatform";
import BtnFav from "./ui/BtnFav";

const Game = ({ game, favorites, favoriteGame }) => {
  const renderGenres = () => {
    return game.genres.map((genre, id) => {
      return (
        <li key={id} className="card__genres--genre">
          | {genre} |
        </li>
      );
    });
  };
  const renderPlatform = () => {
    return game.platforms.map((platform, id) => {
      return (
        <li key={id}>
          <img
            className="card__platforms--logo"
            src={getIconPlatform(platform)}
            alt={platform}
          />
        </li>
      );
    });
  };
  const isFavorite = favorites.find((favorite) => favorite.id === game.id);

  return (
    <li className="card" id={game.id}>
      <BtnFav
        id={game.id}
        cover={game.cover}
        name={game.name}
        isFavorite={isFavorite}
        favoriteGame={favoriteGame}
      />

      <Link to={`/game/${game.id}`}>
        <div className="card__container--img">
          <img
            className="card__img"
            src={game.cover}
            alt={`${game.name} "cover"`}
            title={game.name}
          />
        </div>
        <h4 className="card__title">{game.name}</h4>
        <ul className="card__genres">{renderGenres()}</ul>
        <ul className="card__platforms">{renderPlatform()}</ul>
        <p className="card__date">{game.released}</p>
      </Link>
    </li>
  );
};

export default Game;
