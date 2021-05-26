import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HyperlinkText from "../HyperlinkText";
import Measure from "./Measure";

const instructions =
  "To test 10 meter gait speed, ask your patient to walk across an area of approx 20 meter length, measuring the middle 10 meters (marked)";

const data: any = [];

function renderResult(total: number) {
  return (
    <React.Fragment>
      <Text style={{ marginTop: 12, fontSize: 24, marginBottom: 5 }}>
        References:
      </Text>
      <View style={styles.references}>
        <HyperlinkText href="https://journals.lww.com/jgpt/fulltext/2009/32020/white_paper___walking_speed__the_sixth_vital_sign_.2.aspx">
          White Paper: “Walking Speed: the Sixth Vital Sign”
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
