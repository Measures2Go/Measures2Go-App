import React from "react";
import * as _ from "lodash";
import { StyleSheet, Text, View } from "react-native";
import Measure from "./Measure";

const instructions =
  "FIM is used at the beginning of an inpatient rehab care episode, periodically during admission, and at time of discharge from inpatient rehab. Leave no blanks; enter 1 if not testable.";

const dataOptions = [
  { value: 7, text: "Complete Independence (Timely, Safety)" },
  { value: 6, text: "Modified Independence (Device used)" },
  { value: 5, text: "Supervision required" },
  { value: 4, text: "Minimal assistance" },
  { value: 3, text: "Moderate assistance" },
  { value: 2, text: "Maximal assistance" },
  { value: 1, text: "Total assistance, or not testable" },
];

const data = [
  {
    title: "Self Care: Eating",
    data: dataOptions,
  },
  {
    title: "Self Care: Grooming",
    data: dataOptions,
  },
  {
    title: "Self Care: Bathing",
    data: dataOptions,
  },
  {
    title: "Self Care: Dressing (Upper)",
    data: dataOptions,
  },
  {
    title: "Self Care: Dressing (Lower)",
    data: dataOptions,
  },
  {
    title: "Self Care: Toileting",
    data: dataOptions,
  },
  {
    title: "Sphincter Control: Bladder",
    data: dataOptions,
  },
  {
    title: "Sphincter Control: Bowel",
    data: dataOptions,
  },
  {
    title: "Transfers: Bed, Chair, Wheelchair",
    data: dataOptions,
  },
  {
    title: "Transfers: Toilet",
    data: dataOptions,
  },
  {
    title: "Transfers: Tub, Shower",
    data: dataOptions,
  },
  {
    title: "Locomotion: Walk/wheelchair",
    data: dataOptions,
  },
  {
    title: "Locomotion: Stairs",
    data: dataOptions,
  },
  {
    title: "Communication: Comprehension",
    data: dataOptions,
  },
  {
    title: "Communication: Expression",
    data: dataOptions,
  },
  {
    title: "Social Cognition: Social Interaction",
    data: dataOptions,
  },
  {
    title: "Social Cognition: Problem Solving",
    data: dataOptions,
  },
  {
    title: "Social Cognition: Memory",
    data: dataOptions,
  },
];

function renderResult(total: number, breakdown: Map<number, number>) {
  const motorScore = _.range(0, 13).reduce(
    (acc, val) => acc + (breakdown.get(val) ?? 0),
    0
  );
  const cognitionScore = _.range(13, 18).reduce(
    (acc, val) => acc + (breakdown.get(val) ?? 0),
    0
  );

  return (
    <React.Fragment>
      <Text style={styles.summaryHeader}>
        Motor Subscale Score: {motorScore}
      </Text>
      <Text style={[styles.summaryHeader, styles.spacer]}>
        Cognition Subscale Score: {cognitionScore}
      </Text>
      <Text style={[styles.summaryHeader, styles.spacer]}>
        Total FIM Score: {total}
      </Text>
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
  spacer: {
    marginTop: 8,
  },
});
