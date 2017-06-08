import React from "react";
import preloader from "spectacle/lib/utils/preloader";
import ImageSlide from 'spectacle-image-slide';

const images = {
  twist: require("../../../assets/img/twist.jpg")
};

preloader(images);

export default class extends React.Component {
  render() {
    return (
      <div style={{textAlign: "center"}}>
        <ImageSlide image={images.twist} title=""/>
      </div>
    );
  }
}
