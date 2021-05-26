import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HyperlinkText from "../HyperlinkText";
import Measure from "./Measure";

const instructions =
  "The Barthel Index broadly categorizes functional independence. It is used to establish complete independence from assistance needed, including cues or supervision, and is used as a record of what a patient actually does. Adaptive equipment is permitted where appropriate.";

const data = [
  {
    title: "Feeding",
    data: [
      { text: "unable" },
      {
        text: "needs help cutting, spreading butter, etc., or requires modified diet",
        value: 5,
      },
      { text: "independent", value: 10 },
    ],
  },
  {
    title: "Bathing",
    data: [
      { text: "dependent" },
      { text: "independent (or in shower)", value: 5 },
    ],
  },
  {
    title: "Grooming",
    data: [
      { text: "needs help with personal care" },
      {
        text: "independent face/hair/teeth/shaving (implements provided)",
        value: 5,
      },
    ],
  },
  {
    title: "Dressing",
    data: [
      { text: "dependent" },
      { text: "needs help but can do about half unaided", value: 5 },
      { text: "independent (including buttons, zips, laces, etc.)", value: 10 },
    ],
  },
  {
    title: "Bowels",
    data: [
      { text: "incontinent (or needs to be given enemas)" },
      { text: "occasional accident", value: 5 },
      { text: "continent", value: 10 },
    ],
  },
  {
    title: "Bladder",
    data: [
      { text: "incontinent, or catheterized and unable to manage alone" },
      { text: "occasional accident ", value: 5 },
      { text: "continent", value: 10 },
    ],
  },
  {
    title: "Toilet Use",
    data: [
      { text: "dependent" },
      { text: "needs some help, but can do something alone", value: 5 },
      { text: "independent (on and off, dressing, wiping)", value: 10 },
    ],
  },
  {
    title: "Transfers",
    instructions: "Bed to chair and back",
    data: [
      { text: "unable, no sitting balance" },
      { text: "major help (one or two people, physical), can sit ", value: 5 },
      { text: "minor help (verbal or physical)", value: 10 },
      { text: "independent", value: 15 },
    ],
  },
  {
    title: "Mobility",
    instructions: "On level surfaces.",
    data: [
      { text: "immobile or < 50 yards" },
      {
        text: "wheelchair independent, including corners, > 50 yards",
        value: 5,
      },
      {
        text: "walks with help of one person (verbal or physical) > 50 yards",
        value: 10,
      },
      {
        text: "independent (but may use any aid; for example, stick) > 50 yards",
        value: 15,
      },
    ],
  },
  {
    title: "Stairs",
    data: [
      { text: "unable" },
      { text: "needs help (verbal, physical, carrying aid)", value: 5 },
      { text: "independent", value: 10 },
    ],
  },
];

function renderResult(total: number) {
  return (
    <React.Fragment>
      <Text style={styles.summaryHeader}>Total Score: {total} / 100</Text>

      <Text style={{ marginTop: 12, fontSize: 24, marginBottom: 5 }}>
        References:
      </Text>
      <View style={styles.references}>
        <HyperlinkText href="https://pubmed.ncbi.nlm.nih.gov/7807430/">
          The Barthel index in clinical practice: use on a rehabilitation ward
          for elderly people
        </HyperlinkText>
      </View>
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
