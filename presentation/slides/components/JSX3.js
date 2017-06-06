import React from "react";
import preloader from "spectacle/lib/utils/preloader";
import ImageSlide from 'spectacle-image-slide';

const images = {
  jsx: require("../../../assets/img/react-component3.png")
};

preloader(images);

export default class extends React.Component {
  render() {
    return (
      <div>
        <ImageSlide image={images.jsx} title=""/>
      </div>
    );
  }
}
