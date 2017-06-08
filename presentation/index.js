// Import React
import React from "react";
import Title from "./slides/Title";
import Summary from "./slides/Summary";
import Close from "./slides/Close";

import Zoidberg from "./slides/intro/Zoidberg";
import Disclaimer from "./slides/intro/Disclaimer";
import WhatIsTypescript from "./slides/intro/WhatIsTypescript";
import TypescriptIntro from "./slides/intro/TypescriptIntro";
import Chart1 from "./slides/intro/Chart1";
import Chart2 from "./slides/intro/Chart2";
import Chart3 from "./slides/intro/Chart3";
import Chart4 from "./slides/intro/Chart4";
import TS1 from "./slides/intro/TS1";
import TS2 from "./slides/intro/TS2";
import ReactSlide from "./slides/intro/React";

import Components from "./slides/components";
import JSX1 from "./slides/components/JSX1";
import JSX2 from "./slides/components/JSX2";
import JSX3 from "./slides/components/JSX3";
import ClassDefinition from "./slides/components/ClassDefinition";
import DomActions from "./slides/components/DomActions";

import Actions from "./slides/actions";
import ActionTypes from "./slides/actions/ActionTypes";
import ReduxActions from "./slides/actions/ReduxActions";

import Reducers from "./slides/reducers";
import ReducerTypeBenefits from "./slides/reducers/ReducerTypeBenefits";
import ReducerMethods from "./slides/reducers/ReducerMethods";
import AllStore from "./slides/reducers/AllStore";
import StateAuto1 from "./slides/reducers/StateAuto1";
import StateAuto2 from "./slides/reducers/StateAuto2";


import theme from "./theme";

// Import Spectacle Core tags
import {
  Deck,
  Slide,
} from "spectacle";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["slide"]} transitionDuration={400} theme={theme} controls={false}>
        <Slide><Title/></Slide>
        <Zoidberg/>
        <Slide><Disclaimer/></Slide>
        <Slide><WhatIsTypescript/></Slide>
        <Slide><Chart1/></Slide>
        <Slide><Chart2/></Slide>
        <Slide><Chart3/></Slide>
        <Slide><Chart4/></Slide>
        <TypescriptIntro/>
        <Slide><TS1/></Slide>
        <Slide><TS2/></Slide>
        <Slide><ReactSlide/></Slide>

        <Slide><Components/></Slide>
        <Slide bgColor="#172b35"><JSX1/></Slide>
        <Slide bgColor="#172b35"><JSX2/></Slide>
        <Slide bgColor="#172b35"><JSX3/></Slide>
        <ClassDefinition/>
        <DomActions/>

        <Slide><Actions/></Slide>
        <ActionTypes/>
        <ReduxActions/>

        <Slide><Reducers/></Slide>
        <Slide><ReducerTypeBenefits/></Slide>
        <ReducerMethods/>
        <AllStore/>
        <Slide bgColor="#172b35"><StateAuto1/></Slide>
        <Slide bgColor="#172b35"><StateAuto2/></Slide>

        <Slide><Summary/></Slide>
        <Slide><Close/></Slide>
      </Deck>
    );
  }
}
