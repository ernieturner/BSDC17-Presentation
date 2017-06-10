import React from "react";
import CodeSlide from "spectacle-code-slide";

const codeSample = require("raw-loader!../code/generic-action.ts");

import {
  CodePane
} from "spectacle";

export default class extends React.Component {
  render() {
    return (
        <CodeSlide slideIndex={this.props.slideIndex}
                   transition={[]}
                   maxWidth={1700}
                   textSize={"38px"}
                   padding={0}
                   lang="typescript"
                   code={codeSample}
                   ranges={[
                       {loc: [0, 0], title: "Typing Action Creators"},
                       {loc: [0, 4]},
                       {loc: [5, 14]},
                       {loc: [15, 20]},
                       {loc: [22, 23]},
                       {loc: [25, 34]}
                   ]}/>
    );
  }
}
