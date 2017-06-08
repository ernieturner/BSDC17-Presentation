import React from "react";
import CodeSlide from "spectacle-code-slide";

const codeSample = require("raw-loader!../code/react-component-definition.ts");

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
                       {loc: [0, 2]},
                       {loc: [3, 13], note: <span>"PropTypes"</span>},
                       {loc: [5, 7], note: <span>Primatives</span>},
                       {loc: [7, 8], note: <span>Arrays</span>},
                       {loc: [8, 9], note: <span>Functions</span>},
                       {loc: [9, 13], note: <span>Sub-objects</span>},
                       {loc: [16, 20], note: <span style={{color: "#ff5c57"}}>Supplied parameters do not match any signature of call target</span>}
                   ]}/>
    );
  }
}