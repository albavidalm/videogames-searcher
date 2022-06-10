import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

import defaultImage from "../assets/images/default.jpg";

const Carousel = (props) => {
  console.log(props);

  const renderScreenshots = () => {
    return props.screenshots.map((screenshot, id) => {
      return (
        <li className="card_img_screen" key={id}>
          <a href={screenshot} target="_blank" rel="noreferrer">
            <img className="card__screenshots" src={screenshot} alt="game" />
          </a>
        </li>
      );
    });
  };

  const images = [
    {
      original:
        "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2942&q=80",
      thumbnail:
        "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2942&q=80",
    },
    {
      original:
        "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2942&q=80",
      thumbnail:
        "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2942&q=80",
    },
    {
      original:
        "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2942&q=80",
      thumbnail:
        "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2942&q=80",
    },
  ];

  const someComponent = (props) => {
    // console.log(props.someProps.objectKey)
    return <div>{/* {props.someProps.objectKey} */}</div>;
  };

  return (
    <ImageGallery
      items={images}
      defaultImage={defaultImage}
      showBullets={true}
      showIndex={true}
      showThumbnails={true}
      lazyLoad={true}
      showPlayButton={false}
      renderCustomControls={someComponent}
    />
  );
};

export default Carousel;
