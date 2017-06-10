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
        <Heading size={4}>What is TypeScript?</Heading>
        <ul className="fa-ul">
          <Appear>
            <li><i className="fa-li fa fa-check-square-o red"/><b>Superset</b> of Javascript which adds type support</li>
          </Appear>
          <Appear>
            <li><i className="fa-li fa fa-check-square-o red"/>Developed by Anders Hejlsberg at Microsoft</li>
          </Appear>
          <Appear>
            <li><i className="fa-li fa fa-check-square-o red"/>3rd most loved language in StackOverflow 2017 rankings</li>
          </Appear>
          <Appear>
            <li><i className="fa-li fa fa-check-square-o red"/>Big in Angular community, Angular 2 written in TS</li>
          </Appear>
          <Appear>
            <li><i className="fa-li fa fa-check-square-o red"/>2.3</li>
          </Appear>
        </ul>
      </div>
    );
  }
}
