import React from "react";
import CodeSlide from "spectacle-code-slide";

const codeSample = require("raw-loader!../code/typescript-example.ts");

import {
  Heading,
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
                       {loc: [0, 3]},
                       {loc: [4, 5], note: <span style={{color: "green"}}>👍</span>},
                       {loc: [6, 7], note: <span style={{color: "#ff5c57"}}>Argument of type '11' is not assignable to parameter of type "string".</span>},
                       {loc: [8, 9], note: <span style={{color: "#ff5c57"}}>Type 'number' is not assignable to type 'string'.</span>}
                   ]}/>
    );
  }
}
