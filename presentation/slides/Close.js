import React from "react";

// Import Spectacle Core tags
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
        <Heading size={5} textColor="secondary">@erniewturner</Heading>
        <Heading size={5} textColor="secondary">github.com/ernieturner</Heading>
      </div>
    );
  }
}
