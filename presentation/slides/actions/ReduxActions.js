import React from "react";
import CodeSlide from "spectacle-code-slide";

const codeSample = require("raw-loader!../code/redux-actions.ts");

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
                       {loc: [0, 0], title: "Binding Redux Action Creators"},
                       {loc: [0, 8]},
                       {loc: [10, 13], note: <span>👎 Requires duplication of function signature</span>},
                       {loc: [14, 17], note: <span>👍 No changes needed when action creator changes</span>}
                   ]}/>
    );
  }
}
