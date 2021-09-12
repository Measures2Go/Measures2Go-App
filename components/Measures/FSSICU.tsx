import React from "react";
import { Picker, StyleSheet, Text, View } from "react-native";
import HyperlinkText from "../HyperlinkText";
import Measure from "./Measure";

const instructions =
  "If you are not familiar with FSS-ICU, please review the full instrument in detail at the link which follows the condensed measure.";

const dataOptions = [
  {
    value: 1,
    text: "Dependent",
  },
  {
    value: 2,
    text: "Max Assist",
  },
  {
    value: 3,
    text: "Mod Assist",
  },
  {
    value: 4,
    text: "Min Assist",
  },
  {
    value: 5,
    text: "Supervision or Cues",
  },
  {
    value: 6,
    text: "Modified Independent",
  },
  {
    value: 7,
    text: "Independent",
  },
];

const data = [
  {
    title: "ROLLING",
    data: dataOptions,
  },
  {
    title: "SUPINE TO SIT",
    data: dataOptions,
  },
  {
    title: "SITTING UNSUPPORTED",
    data: dataOptions,
  },
  {
    title: "SIT TO STAND",
    data: dataOptions,
  },
  {
    title: "AMBULATION",
    data: [
      {
        value: 1,
        text: "< 50 Feet",
      },
      {
        value: 2,
        text: "50-150 Feet",
      },
      {
        value: 3,
        text: "150 Feet with 50% assistance",
      },
      {
        value: 4,
        text: "150 Feet with 25% assistance",
      },
      {
        value: 5,
        text: "150 Feet with Supervision and Cues",
      },
      {
        value: 6,
        text: "150 Feet with A.D.",
      },
      {
        value: 7,
        text: "150 Feet Independently",
      },
    ],
  },
];

function renderResult(total: number) {
  return (
    <React.Fragment>
      <Text style={styles.summaryHeader}>Total Score: {total} / 35</Text>

      <Text style={{ marginTop: 12, fontSize: 24, marginBottom: 5 }}>
        References:
      </Text>
      <View style={styles.references}>
        <HyperlinkText href="https://www.improvelto.com/wp-content/uploads/2015/12/FSS-ICU-Creative-Commons-V2-08-12-15-2.pdf">
          Functional Status Score for the Intensive Care Unit
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
