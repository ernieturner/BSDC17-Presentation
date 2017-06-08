import React from "react";
import preloader from "spectacle/lib/utils/preloader";
import ImageSlide from 'spectacle-image-slide';

const images = {
  dt: require("../../../assets/img/dt.png")
};

preloader(images);

export default class extends React.Component {
  render() {
    return (
      <div style={{textAlign: "center"}}>
        <ImageSlide image={images.dt}/>
      </div>
    );
  }
}
