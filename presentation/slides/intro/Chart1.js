import React from "react";
import preloader from "spectacle/lib/utils/preloader";
import ImageSlide from 'spectacle-image-slide';

const images = {
  chart1: require("../../../assets/img/chart1.2.png")
};

preloader(images);

export default class extends React.Component {
  render() {
    return (
      <div style={{textAlign: "center"}}>
        <ImageSlide image={images.chart1} title=""/>
      </div>
    );
  }
}
