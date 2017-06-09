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
        <Typeface font="'proxima-nova'-serif">
          <Heading size={5} textAlign="left" textTransform="uppercase">Static Typing for React?</Heading>
  <Text textSize="35px" textAlign='left' textTransform="uppercase" lineHeight='45px' fontWeight='100'>Why Not Typescript?</Text>
        </Typeface>
        <br/>
        <hr width='200px' color="#EE2E2A"/>
        <br/>
        <br/>
        <br/>
        <br/>
        <Typeface font="'proxima-nova'-serif" align='flex-end'>
            <Text textSize="25px" textColor="secondary" textAlign="right">@erniewturner</Text>
            <Text textSize="25px" textColor="secondary" textAlign="right">@ironcorelabs</Text>
        </Typeface>
      </div>
    );
  }
}
