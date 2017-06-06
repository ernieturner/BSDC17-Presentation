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
        <Heading size={4}>Benefits</Heading>
        <ul className="fa-ul">
          <Appear>
            <li><i className="fa-li fa fa-check-square-o green"/>Guarantees about action payload</li>
          </Appear>
          <Appear>
            <li><i className="fa-li fa fa-check-square-o green"/>Autocompletion for store consumers</li>
          </Appear>
          <Appear>
            <li><i className="fa-li fa fa-check-square-o green"/>Creating store shape requires undestanding all scenarios</li>
          </Appear>
        </ul>
      </div>
    );
  }
}
