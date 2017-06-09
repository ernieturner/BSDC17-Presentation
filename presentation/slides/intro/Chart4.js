import React from "react";
import preloader from "spectacle/lib/utils/preloader";
import ImageSlide from 'spectacle-image-slide';

const images = {
  chart4: require("../../../assets/img/chart4.2.png")
};

preloader(images);

export default class extends React.Component {
  render() {
    return (
      <div style={{textAlign: "center"}}>
        <ImageSlide image={images.chart4} title=""/>
      </div>
    );
  }
}
