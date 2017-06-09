import React from "react";
import preloader from "spectacle/lib/utils/preloader";

const images = {
  zoidberg: require("../../../assets/img/zoidberg.jpg"),
  ts: require("../../../assets/img/ts.png")
};

preloader(images);

import {
  Image
} from "spectacle";

export default class extends React.Component {
  render() {
    return (
      <div style={{textAlign: "center"}}>
        <Image src={images.zoidberg} />
      </div>
    );
  }
}
