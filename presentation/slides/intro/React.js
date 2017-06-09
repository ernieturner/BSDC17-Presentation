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
          <Appear><li><i className="fa-li fa fa-check-square-o red"/>JSX autocompletion and validation</li></Appear>
          <Appear><li><i className="fa-li fa fa-check-square-o red"/>DOM event typing</li></Appear>
          <Appear><li><i className="fa-li fa fa-check-square-o red"/>Flux action call signature validation</li></Appear>
          <Appear><li><i className="fa-li fa fa-check-square-o red"/>Redux store autocompletion</li></Appear>
          <Appear><li><i className="fa-li fa fa-check-square-o red"/>Compile-time prop validation</li></Appear>
        </ul>
      </div>
    );
  }
}
