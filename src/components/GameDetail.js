import React from "react";
import getIconPlatform from "../services/getIconPlatform";
import { Link } from "react-router-dom";

const GameDetail = (props) => {
  //console.log(props);
  const renderScreenshots = () => {
    return props.gameDetail.screenshots.map((screenshot, id) => {
      return (
        <li className="card_img_screen" key={id}>
          <img className="card__screenshots" src={screenshot} alt="game" />
        </li>
      );
    });
  };
  const renderPlatform = () => {
    return props.gameDetail.platforms.map((platform, id) => {
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
    <>
      <Link className="goback" to="/">
        ⬅️ Go back
      </Link>

      <article className="detail">
        <div className="detail__card">
          <img
            className="detail__card--img"
            src={props.gameDetail.cover}
            alt={`${props.gameDetail.name}`}
            title={props.gameDetail.name}
          />

          <div className="detail__card--info">
            <h2 className="detail__card--info-title">
              {props.gameDetail.name}
            </h2>
            <section>
              <ul className="detail__card--info-description">
                {renderPlatform()}
              </ul>
              <li>
                <span className="boldtitle">Genre: </span>
                {props.gameDetail.genres}
              </li>
              <li>
                <span className="boldtitle">Language: </span>
                {props.gameDetail.language}
              </li>
              <li>
                <span className="boldtitle">Rating: </span>
                {props.gameDetail.rating}
              </li>
              <li>
                <span className="boldtitle">Released: </span>
                {props.gameDetail.released}
              </li>
              <ul className="screenshotUl">
                Screenshots: {renderScreenshots()}
              </ul>
            </section>
          </div>
        </div>
      </article>
    </>
  );
};

export default GameDetail;
