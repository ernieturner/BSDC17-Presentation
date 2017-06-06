import React from "react";
import CodeSlide from "spectacle-code-slide";

const codeSample = require("raw-loader!../code/all-store.ts");

import {
  CodePane
} from "spectacle";

export default class extends React.Component {
  render() {
    return (
        <CodeSlide slideIndex={this.props.slideIndex}
                   transition={[]}
                   maxWidth={1700}
                   textSize={"33px"}
                   padding={0}
                   lang="typescript"
                   code={codeSample}
                   ranges={[
                       {loc: [0, 0], title: "Creating a Fully Typed Store"},
                       {loc: [0, 1], note: "Import reducer function and state shape"},
                       {loc: [2, 10], note: "Export store as well as store shape"},
                   ]}/>
    );
  }
}
