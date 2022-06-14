import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

import defaultImage from "../assets/images/default.jpg";

const Carousel = (props) => {
  const images = () => {
    return props.screenshots.map((screenshot) => {
      return { original: screenshot, thumbnail: screenshot };
    });
  };

  const someComponent = (props) => {
    // console.log(props.someProps.objectKey)
    return <div>{/* {props.someProps.objectKey} */}</div>;
  };

  return (
    <ImageGallery
      items={images()}
      defaultImage={defaultImage}
      showBullets={true}
      showIndex={true}
      showThumbnails={true}
      lazyLoad={true}
      showPlayButton={false}
      renderCustomControls={someComponent}
      onErrorImageURL="https://filestore.community.support.microsoft.com/api/images/ext?url=https%3a%2f%2fanswersstaticfilecdnv2.azureedge.net%2fstatic%2fimages%2fimage-not-found.jpg"
    />
  );
};

export default Carousel;
