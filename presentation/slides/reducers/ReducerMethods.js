import React from "react";
import CodeSlide from "spectacle-code-slide";

const codeSample = require("raw-loader!../code/reducer-methods.ts");

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
                       {loc: [0, 0], title: "Typing Reducer Methods"},
                       {loc: [0, 5]},
                       {loc: [8, 12]},
                       {loc: [15, 23]}
                   ]}/>
    );
  }
}
