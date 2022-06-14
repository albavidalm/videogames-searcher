import React from "react";
import { Link } from "react-router-dom";
import getIconPlatform from "../services/getIconPlatform";
import BtnFav from "./ui/BtnFav";

const Game = (props) => {
  const renderGenres = () => {
    return props.game.genres.map((genre, id) => {
      return (
        <li key={id} className="card__genres--genre">
          | {genre} |
        </li>
      );
    });
  };
  const renderPlatform = () => {
    return props.game.platforms.map((platform, id) => {
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

  return (
    <div className="click">
      <BtnFav />

      <Link to={`/game/${props.game.id}`}>
        <li className="card">
          {/* <a href={`/game/${props.game.id}`}>Details</a> */}
          <div className="card__container--img">
            <img
              className="card__img"
              src={props.game.cover}
              alt={`${props.game.name} "cover"`}
              title={props.game.name}
            />
          </div>
          <h4 className="card__title">{props.game.name}</h4>
          <ul className="card__genres">{renderGenres()}</ul>
          <ul className="card__platforms">{renderPlatform()}</ul>
          <p className="card__date">{props.game.released}</p>
        </li>
      </Link>
    </div>
  );
};

export default Game;
