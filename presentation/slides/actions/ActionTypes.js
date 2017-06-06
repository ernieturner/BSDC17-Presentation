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
                       {loc: [0, 5]},
                       {loc: [8, 16]},
                       {loc: [18, 25]},
                       {loc: [28, 48]}
                   ]}/>
    );
  }
}
