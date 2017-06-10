import React from "react";

// Import Spectacle Core tags
import {
  Heading,
  Appear
} from "spectacle";

export default class extends React.Component {
  render() {
    return (
      <div>
        <Heading size={4}>Library Type Definitions</Heading>
        <ul className="fa-ul">
          <Appear>
            <li><i className="fa-li fa fa-check-square-o red"/>Self published</li>
          </Appear>
          <Appear>
            <li><i className="fa-li fa fa-check-square-o red"/>Definitely Typed</li>
          </Appear>
        </ul>
      </div>
    );
  }
}
