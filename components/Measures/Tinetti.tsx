import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HyperlinkText from "../HyperlinkText";
import Measure from "./Measure";

const data = [
  {
    title: "Sitting Balance",
    instructions: "Please be seated in hard, armless chair.",
    data: [{ text: "Leans or slides in chair" }, { text: "Steady, safe" }],
  },
  {
    title: "Rises from Chair",
    data: [
      { text: "Unable without help" },
      { text: "Able, uses arms to help" },
      { text: "Able without using arms" },
    ],
  },
  {
    title: "Attempts to Arise From Chair",
    data: [
      { text: "Unable without help" },
      { text: "Able, requires > 1 attempt" },
      { text: "Able to rise, 1 attempt" },
    ],
  },
  {
    title: "Immediate Standing Balance",
    instructions: "First 5 seconds.",
    data: [
      { text: "Unsteady (swaggers, moves feet, trunk sway)" },
      { text: "Steady, but uses walker or other support" },
      { text: "Steady, without walker or other support" },
    ],
  },
];

const instructions = [
  "Tinetti Performance-Oriented Mobility Assessment helps quantify evaluation of older adults' gait and balance. Chair, watch/timer and short walkway are required. The test is split into balance and gait subsections. Separate and total scores will be provided.",
  "Instructions to patient are provided beneath each item name",
];

function renderResult(total: number) {
  let result = "";

  if (total >= 41) {
    result = "Independent";
  } else if (total >= 21 && total <= 40) {
    result = "Walking with assistance";
  } else if (total <= 20) {
    result = "Wheelchair bound";
  }

  return (
    <React.Fragment>
      <Text style={styles.summaryHeader}>Total Score: {total}</Text>
      <Text style={styles.detail}>Interpretation: {result}</Text>

      <Text style={{ marginTop: 12, fontSize: 24, marginBottom: 5 }}>
        References:
      </Text>
      <View style={styles.references}>
        <Text>Score &lt; 45 may indicate greater risk of falling</Text>
        <HyperlinkText href="https://pubmed.ncbi.nlm.nih.gov/1468055/">
          Measuring balance in the elderly: validation of an instrument (1992).
        </HyperlinkText>
        <Text>
          BS &lt; 51 with history of falls and BBS &lt; 42 without history of
          falls have been used as a sensitive predictor of fall risk
        </Text>
        <HyperlinkText href="https://pubmed.ncbi.nlm.nih.gov/9256869/">
          Predicting the probability of falls in community-dwelling older
          adults.
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
