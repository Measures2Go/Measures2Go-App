import React from "react";
import Barthel from "./Barthel";
import Berg from "./Berg";
import DynamicGait from "./DynamicGait";
import Edema from "./Edema";
import FSSICU from "./FSSICU";
import GaitSpeed from "./GaitSpeed";
import ModifiedAshworth from "./ModifiedAshworth";
import Tinetti from "./Tinetti";

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
    ],
  },
];
