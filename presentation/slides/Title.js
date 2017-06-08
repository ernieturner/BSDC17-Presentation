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
      </div>
    );
  }
}
