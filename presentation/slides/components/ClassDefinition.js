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
                       {loc: [4, 6], note: <span>Primatives</span>},
                       {loc: [6, 7], note: <span>Arrays</span>},
                       {loc: [7, 8], note: <span>Functions</span>},
                       {loc: [8, 12], note: <span>Sub-objects</span>},
                       {loc: [14, 18]},
                       {loc: [19, 22], note: <span style={{color: "#ff5c57"}}>Supplied parameters do not match any signature of call target</span>},
                       {loc: [23, 29], note: <span style={{color: "#ff5c57"}}>Type 'string' is not assignable to type 'number'.</span>}
                   ]}/>
    );
  }
}