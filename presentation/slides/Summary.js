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
        <Heading size={4}>Summary</Heading>
        <ul className="fa-ul centered-list">
          <Appear>
            <li style={{textAlign: "center"}}>🏇 React + TypeScript makes development crazy fast 🏇</li>
          </Appear>
          <Appear>
            <li style={{textAlign: "center"}}>🆓 You can get some benefits without adding types 🆓</li>
          </Appear>
          <Appear>
            <li style={{textAlign: "center"}}>🚫 Avoid the use of "any" 🚫</li>
          </Appear>
          <Appear>
            <li style={{textAlign: "center"}}>💪 You're probably already compiling your JS 💪</li>
          </Appear>
          <Appear>
            <li style={{textAlign: "center"}}>🎉 Save yourself runtime errors: Add Types! 🎉</li>
          </Appear>
        </ul>
      </div>
    );
  }
}
