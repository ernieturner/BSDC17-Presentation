import React from "react";

// Import Spectacle Core tags
import {
  Heading
} from "spectacle";

export default class extends React.Component {
  render() {
    return (
      <div>
        <Heading size={2} caps textColor="base">Thank You!</Heading>
        <br/>
        <br/>
        <Heading size={6} lineHeight={1.5} textColor="secondary">Ernie Turner</Heading>
        <Heading size={6} textColor="secondary">@erniewturner</Heading>
        <Heading size={6} textColor="secondary">github.com/ernieturner</Heading>
      </div>
    );
  }
}
