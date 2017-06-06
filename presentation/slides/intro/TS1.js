import React from "react";
import preloader from "spectacle/lib/utils/preloader";
import ImageSlide from 'spectacle-image-slide';

const images = {
  chart1: require("../../../assets/img/chart1.png")
};

preloader(images);

export default class extends React.Component {
  render() {
    return (
      <div style={{textAlign: "center"}}>
        <span className="courtesy">Image Courtesy https://blog.mariusschulz.com/2016/09/27/typescript-2-0-non-nullable-types</span>
        <ImageSlide image="https://blog.mariusschulz.com/content/images/typescript-number-domain-with-null-and-undefined.png" title="TypeScript 1.x"/>
      </div>
    );
  }
}
