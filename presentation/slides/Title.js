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
        <Typeface font="'proxima-nova',sans-serif">
          <Heading size={5} align="left">Static Typing for React?</Heading>
          <br/>
          <br/>
          <Text textSize="40px" align='left'>Why Not Typescript?</Text>
        </Typeface>
        <Text textSize="30px" textColor="secondary" align="right">@erniewturner</Text>
        <Text textSize="30px" textColor="secondary" align="right">@ironcorelabs</Text>
      </div>
    );
  }
}
