import React from "react";

import {
  Heading,
  List,
  ListItem,
  Appear
} from "spectacle";

export default class extends React.Component {
  render() {
    return (
      <div>
        <Heading size={4}>Disclaimer</Heading>
        <ul className="fa-ul">
          <Appear>
            <li><i className="fa-li fa fa-check-square-o green"/>Not a TypeScript-Flow comparison</li>
          </Appear>
          <Appear>
            <li><i className="fa-li fa fa-check-square-o green"/>Static Typing for React? Yes, Please!</li>
          </Appear>
        </ul>
      </div>
    );
  }
}
