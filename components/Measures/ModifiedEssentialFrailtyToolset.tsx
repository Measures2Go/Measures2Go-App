import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HyperlinkText from "../HyperlinkText";
import Measure from "./Measure";

const instructions =
  "The modified Essential Frailty Toolset is used for understanding risk of disability and death following aortic valve replacement.";

const data = [
  // Item 1
  {
    title: "Chair Rise/ 5x sit to stand",
    data: [
      { value: 0, text: "< 15 seconds (0 points)" },
      { value: 1, text: ">= 15 seconds (1 point)" },
      { value: 2, text: "unable to complete (2 points)" },
    ],
  },

  // Item 2
  {
    title: "Cognition",
    data: [
      { value: 0, text: "No cognitive impairment (0 points)" },
      { value: 1, text: "Cognitive impairmetn (1 point)" },
    ],
  },

  // Item 3
  {
    title: "Hemoglobin",
    data: [
      { value: 0, text: ">= 13 g/dL (Male) or >= 12 g/dL (Female) (0 points)" },
      { value: 1, text: "< 13 g/dL (Male) or < 12 g/dL (Female) (1 point)" },
    ],
  },

  // Item 4
  {
    title: "Albumin",
    data: [
      { value: 0, text: "Serum albumin >= 3.5 g/dL (0 points)" },
      { value: 1, text: "Serum albumin < 3.5 g/dL (1 point)" },
    ],
  },
];

function renderResult(total: number) {
  return (
    <React.Fragment>
      <Text style={styles.summaryHeader}>Total Score: {total} / 9</Text>
      <Text style={{ marginTop: 12, fontSize: 24, marginBottom: 5 }}>
        References:
      </Text>
      <View style={styles.references}>
        <HyperlinkText href="https://academic.oup.com/ehjqcco/article/5/2/153/5106736">
          novel geriatric assessment frailty score predicts 2-year mortality
          after transcatheter aortic valve implantation | European Heart Journal
          - Quality of Care and Clinical Outcomes | Oxford Academic (oup.com)
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
