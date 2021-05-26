import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HyperlinkText from "../HyperlinkText";
import Measure from "./Measure";

const instructions =
  "If you are not familiar with FSS-ICU, please review the full instrument in detail at the link which follows the condensed measure.";

const data: any = [];

function renderResult(total: number) {
  return (
    <React.Fragment>
      <Text style={styles.summaryHeader}>Total Score: {total} / 100</Text>

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
