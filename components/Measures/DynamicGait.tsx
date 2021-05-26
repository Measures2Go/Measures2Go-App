import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HyperlinkText from "../HyperlinkText";
import Measure from "./Measure";

const instructions =
  "DGI is used to assess fall risk in older adults. Shoebox, 2 cones, stairs and a short walkway are required. For each item, score the lowest which applies.";

const data = [
  {
    title: "Gait (level surface)",
    instructions: "Walk at your normal speed from here to the next mark (20’)",
    data: [
      {
        text: "Normal: Walks 20’, no assistive devices, good sped, no evidence for imbalance, normal gait pattern",
        value: 3,
      },
      {
        text: "Mild Impairment: Walks 20’, uses assistive devices, slower speed, mild gait deviations.",
        value: 2,
      },
      {
        text: "Moderate Impairment: Walks 20’, slow speed, abnormal gait pattern, evidence for imbalance.",
        value: 1,
      },
      {
        text: "Severe Impairment: Cannot walk 20’ without assistance, severe gait deviations or imbalance.",
        value: 0,
      },
    ],
  },
  {
    title: "Change in Gait Speed",
    instructions:
      "Begin walking at your normal pace (for 5’), when I tell you “go,” walk as fast as you can (for 5’). When I tell you “slow,” walk as slowly as you can (for 5’).",
    data: [
      {
        text: "Normal: Able to smoothly change walking speed without loss of balance or gait deviation. Shows a significant difference in walking speeds between normal, fast and slow speeds.",
        value: 3,
      },
      {
        text: "Mild Impairment: Is able to change speed but demonstrates mild gait deviations, or not gait deviations but unable to achieve a significant change in velocity, or uses an assistive device.",
        value: 2,
      },
      {
        text: "Moderate Impairment: Makes only minor adjustments to walking speed, or accomplishes a change in speed with significant gait deviations, or changes speed but has significant gait deviations, or changes speed but loses balance but is able to recover and continue walking.",
        value: 1,
      },
      {
        text: "Severe Impairment: Cannot change speeds, or loses balance and has to reach for wall or be caught.",
        value: 0,
      },
    ],
  },
  {
    title: "Gait with Horizontal Head Turns",
    instructions:
      "Begin walking at your normal pace. When I tell you to “look right,” keep walking straight, but turn your head to the right. Keep looking to the right until I tell you, “look left,” then keep walking straight and turn your head to the left. Keep your head to the left until I tell you “look straight,“ then keep walking straight, but return your head to the center.",
    data: [
      {
        text: "Normal: Performs head turns smoothly with no change in gait.",
        value: 3,
      },
      {
        text: "Mild Impairment: Performs head turns smoothly with slight change in gait velocity, i.e., minor disruption to smooth gait path or uses walking aid.",
        value: 2,
      },
      {
        text: "Moderate Impairment: Performs head turns with moderate change in gait velocity, slows down, staggers but recovers, can continue to walk.",
        value: 1,
      },
      {
        text: "Severe Impairment: Performs task with severe disruption of gait, i.e., staggers outside 15” path, loses balance, stops, reaches for wall.",
        value: 0,
      },
    ],
  },
  {
    title: "Gait with Vertical Head Turns",
    instructions:
      "Begin walking at your normal pace. When I tell you to “look up,” keep walking straight, but tip your head up. Keep looking up until I tell you, “look down,” then keep walking straight and tip your head down. Keep your head down until I tell you “look straight,“ then keep walking straight, but return your head to the center.",
    data: [
      {
        text: "Normal: Performs head turns smoothly with no change in gait.",
        value: 3,
      },
      {
        text: "Mild Impairment: Performs head turns smoothly with slight change in gait velocity, i.e., minor disruption to smooth gait path or uses walking aid.",
        value: 2,
      },
      {
        text: "Moderate Impairment: Performs head turns with moderate change in gait velocity, slows down, staggers but recovers, can continue to walk.",
        value: 1,
      },
      {
        text: "Severe Impairment: Performs task with severe disruption of gait, i.e., staggers outside 15” path, loses balance, stops, reaches for wall.",
        value: 0,
      },
    ],
  },
  {
    title: "Gait and Pivot Turn",
    instructions:
      "Begin walking at your normal pace. When I tell you, “turn and stop,” turn as quickly as you can to face the opposite direction and stop.",
    data: [
      {
        text: "Normal: Pivot turns safely within 3 seconds and stops quickly with no loss of balance.",
        value: 3,
      },
      {
        text: "Mild Impairment: Pivot turns safely in > 3 seconds and stops with no loss of balance.",
        value: 2,
      },
      {
        text: "Moderate Impairment: Turns slowly, requires verbal cueing, requires several small steps to catch balance following turn and stop.",
        value: 1,
      },
      {
        text: "Severe Impairment: Cannot turn safely, requires assistance to turn and stop.",
        value: 0,
      },
    ],
  },
  {
    title: "Step over Obstacle",
    instructions:
      "Begin walking at your normal speed. When you come to the shoebox, step over it, not around it, and keep walking.",
    data: [
      {
        text: "Normal: Is able to step over the box without changing gait speed, no evidence of imbalance.",
        value: 3,
      },
      {
        text: "Mild Impairment: Is able to step over box, but must slow down and adjust steps to clear box safely.",
        value: 2,
      },
      {
        text: "Moderate Impairment: Is able to step over box but must stop, then step over. May require verbal cueing.",
        value: 1,
      },
      {
        text: "Severe Impairment: Cannot perform without assistance.",
        value: 0,
      },
    ],
  },
  {
    title: "Step around Obstacles",
    instructions:
      "Begin walking at normal speed. When you come to the first cone (about 6’ away), walk around the right side of it. When you come to the second cone (6’ past first cone), walk around it to the left.",
    data: [
      {
        text: "Normal: Is able to walk around cones safely without changing gait speed; no  evidence of imbalance.",
        value: 3,
      },
      {
        text: "Mild Impairment: Is able to step around both cones, but must slow down and adjust steps to clear cones.",
        value: 2,
      },
      {
        text: "Moderate Impairment: Is able to clear cones but must significantly slow, speed to accomplish task, or requires verbal cueing.",
        value: 1,
      },
      {
        text: "Severe Impairment: Unable to clear cones, walks into one or both cones, or requires physical assistance.",
        value: 0,
      },
    ],
  },
  {
    title: "Steps",
    instructions:
      "Walk up these stairs as you would at home, i.e., using the railing if necessary. At the top, turn around and walk down.",
    data: [
      { text: "Normal: Alternating feet, no rail.", value: 3 },
      { text: "Mild Impairment: Alternating feet, must use rail.", value: 2 },
      {
        text: "Moderate Impairment: Two feet to a stair, must use rail.",
        value: 1,
      },
      { text: "Severe Impairment: Cannot do safely.", value: 0 },
    ],
  },
];

function renderResult(total: number) {
  let warning = "";
  if (total < 19) {
    warning = "Possibility of falls in community-dwelling elderly.";
  }

  return (
    <React.Fragment>
      <Text style={styles.summaryHeader}>Total Score: {total} / 24</Text>
      {warning && <Text style={styles.detail}>Diagnosis: {warning}</Text>}
    </React.Fragment>
  );
}

export default function (props: any) {
  return (
    <Measure
      items={data}
      renderResult={renderResult}
      instructions={instructions}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  detail: {
    fontSize: 20,
  },
  references: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  summaryHeader: {
    fontSize: 32,
    fontWeight: "600",
  },
});
