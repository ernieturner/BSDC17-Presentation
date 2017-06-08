import React from "react";
import CodeSlide from "spectacle-code-slide";

const codeSample = require("raw-loader!../code/dom-actions.ts");

import {
  CodePane
} from "spectacle";

export default class extends React.Component {
  render() {
    return (
        <CodeSlide slideIndex={this.props.slideIndex}
                   transition={[]}
                   maxWidth={1700}
                   textSize={"42px"}
                   padding={0}
                   lang="typescript"
                   code={codeSample}
                   ranges={[
                       {loc: [0, 5]},
                       {loc: [2, 3], note: <span style={{color: "#ff5c57"}}>Property 'value' does not exist on type 'EventTarget'.</span>},
                       {loc: [8, 12], note: <span>👍</span>},
                   ]}/>
    );
  }
}