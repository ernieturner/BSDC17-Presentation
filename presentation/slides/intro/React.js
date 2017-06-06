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
        <Heading size={4}>Benefits in React</Heading>
        <ul className="fa-ul">
          <Appear><li><i className="fa-li fa fa-check-square-o green"/>JSX autocompletion and validation</li></Appear>
          <Appear><li><i className="fa-li fa fa-check-square-o green"/>DOM event typing</li></Appear>
          <Appear><li><i className="fa-li fa fa-check-square-o green"/>Flux action call signature validation</li></Appear>
          <Appear><li><i className="fa-li fa fa-check-square-o green"/>Redux store autocompletion</li></Appear>
          <Appear><li><i className="fa-li fa fa-check-square-o green"/>Compile-time prop validation</li></Appear>
        </ul>
      </div>
    );
  }
}
