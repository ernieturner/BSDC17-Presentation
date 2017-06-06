import React from "react";

// Import Spectacle Core tags
import {
  Heading,
  Text,
  Typeface
} from "spectacle";

export default class extends React.Component {
  render() {
    return (
      <div>
        <Typeface font="Russo One">
          <Text textSize="72px">Static Typing for React?</Text>
          <br/>
          <br/>
          <Text textSize="72px">Why Not Typescript?</Text>
          <br/>
          <br/>
        </Typeface>
        <Heading size={6} lineHeight={1.5} textColor="secondary">Ernie Turner</Heading>
        <Heading size={6} textColor="secondary">@erniewturner</Heading>
        <Heading size={6} textColor="secondary">@ironcorelabs</Heading>
      </div>
    );
  }
}
