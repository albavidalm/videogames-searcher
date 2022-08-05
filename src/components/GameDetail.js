import React from "react";
import getIconPlatform from "../services/getIconPlatform";
import BtnGoBack from "./ui/BtnGoBack";
import Carousel from "./Carousel";
import NotFoundGame from "./NotFoundGame";

const GameDetail = ({ gameDetail }) => {
  const renderPlatform = () => {
    return gameDetail.platforms.map((platform, id) => {
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

  const renderGenres = () => {
    return gameDetail.genres.map((genre, id) => {
      return (
        <li key={id} className="card__genres--genre detail-text">
          {genre}
        </li>
      );
    });
  };

  if (gameDetail === undefined) {
    return <NotFoundGame />;
  }

  return (
    <>
      <BtnGoBack />

      <article className="detail">
        <Carousel screenshots={gameDetail.screenshots} />
        {/* <img
          className="detail__img"
          src={gameDetail.cover}
          alt={`${gameDetail.name}`}
          title={gameDetail.name}
        /> */}

        <section className="detail__info">
          <h2 className="detail__info--title">{gameDetail.name}</h2>

          <ul className="detail__info--container">{renderPlatform()}</ul>

          <div className="detail__info--container">
            <h3 className="filterTitle">Genre: </h3>
            <ul className="card__genres detail__info--genres">
              {renderGenres()}
            </ul>
          </div>

          <div className="detail__info--container">
            <h3 className="filterTitle">Language: </h3>
            <ul>
              <li className="detail-text">{gameDetail.language}</li>
            </ul>
          </div>

          <div className="detail__info--container">
            <h3 className="filterTitle">Rating: </h3>
            <p className="detail-text">{gameDetail.rating}</p>
          </div>

          <div className="detail__info--container">
            <h3 className="filterTitle">Released:</h3>
            <p className="detail-text">{gameDetail.released}</p>
          </div>

          {/* <h3 className="filterTitle">Screenshots: </h3>
          <ul className="screenshotUl">{renderScreenshots()}</ul> */}
          {/* <Carousel screenshots={gameDetail.screenshots} /> */}
        </section>
      </article>
    </>
  );
};

export default GameDetail;
