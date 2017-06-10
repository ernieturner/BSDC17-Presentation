import React from "react";

import {
  Heading,
  Text
} from "spectacle";

export default class extends React.Component {
  render() {
    return (
      <div>
        <Heading size={4} textTransform="uppercase">Thank You</Heading>
        <br/>
        <br/>
        <br/>
        <br/>
        <Text textSize="45px" textColor="secondary" textAlign="right">Ernie Turner</Text>
        <Text textSize="45px" textColor="secondary" textAlign="right"><i className="fa fa-twitter"/> erniewturner</Text>
        <Text textSize="45px" textColor="secondary" textAlign="right"><i className="fa fa-github"/> ernieturner</Text>
      </div>
    );
  }
}
