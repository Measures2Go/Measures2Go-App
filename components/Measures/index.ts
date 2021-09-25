import React from "react";
import Barthel from "./Barthel";
import Berg from "./Berg";
import DynamicGait from "./DynamicGait";
import Edema from "./Edema";
import FriedCriteriaForFrailty from "./FriedCriteriaForFrailty";
import FSSICU from "./FSSICU";
import FunctionalIndependenceMeasure from "./FunctionalIndependenceMeasure";
import GaitSpeed from "./GaitSpeed";
import ModifiedAshworth from "./ModifiedAshworth";
import ModifiedEssentialFrailtyToolset from "./ModifiedEssentialFrailtyToolset";
import TimedUpAndGo from "./TimedUpAndGo";
import Tinetti from "./Tinetti";
import RASS from "./RASS";

export type Navigation = ReadonlyArray<{
  readonly title: string;
  readonly data: ReadonlyArray<{
    readonly title: string;
    readonly component?: React.ComponentType<any>;
  }>;
}>;

export const navigation: Navigation = [
  {
    title: "Balance",
    data: [
      {
        title: "Berg Balance Scale",
        component: Berg,
      },
      {
        title: "Tinetti POMA",
        component: Tinetti,
      },
    ],
  },
  {
    title: "Functional Capacity",
    data: [
      {
        title: "FSS-ICU",
        component: FSSICU,
      },
      {
        title: "Barthel Index",
        component: Barthel,
      },
      {
        title: "Timed Up and Go",
        component: TimedUpAndGo,
      },
      {
        title: "Functional Independence Measure",
        component: FunctionalIndependenceMeasure,
      },
    ],
  },
  {
    title: "Frailty",
    data: [
      {
        title: "Modified Essential Frailty Toolset",
        component: ModifiedEssentialFrailtyToolset,
      },
      {
        title: "Fried Criteria for Frailty",
        component: FriedCriteriaForFrailty,
      },
    ],
  },
  {
    title: "Gait",
    data: [
      {
        title: "Dynamic Gait Index",
        component: DynamicGait,
      },
      {
        title: "Gait Speed",
        component: GaitSpeed,
      },
    ],
  },
  {
    title: "Reference Scales",
    data: [
      {
        title: "Modified Ashworth",
        component: ModifiedAshworth,
      },
      {
        title: "Edema Grades",
        component: Edema,
      },
       {
        title: "RASS",
        component: RASS,
      },
    ],
  },
];
