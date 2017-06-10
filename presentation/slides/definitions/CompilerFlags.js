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
        <Heading size={4}>Compiler Strictness</Heading>
        <ul className="fa-ul">
          <Appear>
            <li><i className="fa-li fa fa-check-square-o red"/>--strictNullChecks</li>
          </Appear>
          <Appear>
            <li><i className="fa-li fa fa-check-square-o red"/>--noImplicitAny</li>
          </Appear>
          <Appear>
            <li><i className="fa-li fa fa-check-square-o red"/>--noImplicitReturns</li>
          </Appear>
          <Appear>
            <li><i className="fa-li fa fa-check-square-o red"/>--noImplicitThis</li>
          </Appear>
          <Appear>
            <li><i className="fa-li fa fa-check-square-o red"/>--noUnusedParameters --noUnusedLocals</li>
          </Appear>
        </ul>
      </div>
    );
  }
}
