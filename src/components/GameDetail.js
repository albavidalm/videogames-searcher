import React from "react";
import getIconPlatform from "../services/getIconPlatform";
import BtnGoBack from "./ui/BtnGoBack";
import Carousel from "./Carousel";

const GameDetail = (props) => {
  // console.log(props);
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

  const renderGenres = () => {
    return props.gameDetail.genres.map((genre, id) => {
      return (
        <li key={id} className="card__genres--genre detail-text">
          {genre}
        </li>
      );
    });
  };

  // const renderScreenshots = () => {
  //   return props.gameDetail.screenshots.map((screenshot, id) => {
  //     return (
  //       <li className="card_img_screen" key={id}>
  //         <a href={screenshot} target="_blank" rel="noreferrer">
  //           <img className="card__screenshots" src={screenshot} alt="game" />
  //         </a>
  //       </li>
  //     );
  //   });
  // };

  return (
    <>
      <BtnGoBack />

      <article className="detail">
        <img
          className="detail__img"
          src={props.gameDetail.cover}
          alt={`${props.gameDetail.name}`}
          title={props.gameDetail.name}
        />

        <section className="detail__info">
          <h2 className="detail__info--title">{props.gameDetail.name}</h2>

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
              <li className="detail-text">{props.gameDetail.language}</li>
            </ul>
          </div>

          <div className="detail__info--container">
            <h3 className="filterTitle">Rating: </h3>
            <p className="detail-text">{props.gameDetail.rating}</p>
          </div>

          <div className="detail__info--container">
            <h3 className="filterTitle">Released:</h3>
            <p className="detail-text">{props.gameDetail.released}</p>
          </div>

          {/* <h3 className="filterTitle">Screenshots: </h3>
          <ul className="screenshotUl">{renderScreenshots()}</ul> */}
          <Carousel screenshots={props.gameDetail.screenshots} />
        </section>
      </article>
    </>
  );
};

export default GameDetail;
