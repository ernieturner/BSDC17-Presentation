import React from "react";

import {
  Heading
} from "spectacle";

export default class extends React.Component {
  render() {
    return (
      <div>
        <Heading size={2} caps textColor="secondary">Thank You!</Heading>
        <br/>
        <br/>
        <br/>
        <Heading size={5} lineHeight={1.5} textColor="secondary">Ernie Turner</Heading>
        <br/>
        <Heading size={5} textColor="secondary"><i className="fa fa-twitter"/> erniewturner</Heading>
        <Heading size={5} textColor="secondary"><i className="fa fa-github"/> ernieturner</Heading>
      </div>
    );
  }
}
