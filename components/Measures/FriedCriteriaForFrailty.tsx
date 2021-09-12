import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import HyperlinkText from "../HyperlinkText";
import SelectableItem from "../SelectableItem";

const data = [
  "Involuntary weight loss (>= 10 pounds over past 6 mos.",
  "Reduced grip strength (relative to established normative age values)",
  "Exhaustion (self-reported)",
  "Reduced walking speed (15 ft walk test)",
  "Low activity relative to age norms (kcal/wk)",
];

export default function () {
  const [checked, setChecked] = React.useState(new Map<number, boolean>());

  const isChecked = (idx: number) => checked.get(idx) ?? false;

  const check = (idx: number) => () =>
    setChecked((s) => new Map(s).set(idx, !(s.get(idx) ?? false)));

  const deficits = [...checked.values()].filter((x) => x).length;

  let frailty = "";
  if (deficits === 0) {
    frailty = "nonfrail";
  } else if (deficits <= 2) {
    frailty = "prefrail";
  } else if (deficits >= 3) {
    frailty = "frail";
  }

  return (
    <ScrollView style={styles.root}>
      <View style={styles.view}>
        {data.map((txt, idx) => (
          <SelectableItem
            text={txt}
            key={idx}
            checked={isChecked(idx)}
            handlePress={check(idx)}
          />
        ))}
        <Text style={{ marginTop: 12, fontSize: 20, marginBottom: 5 }}>
          Frailty Rating: {frailty}
        </Text>

        <Text style={{ marginTop: 12, fontSize: 24, marginBottom: 5 }}>
          References:
        </Text>
        <View style={styles.references}>
          <HyperlinkText href="https://pubmed.ncbi.nlm.nih.gov/11253156/">
            Frailty in older adults: evidence for a phenotype - PubMed (nih.gov)
          </HyperlinkText>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#fff",
    height: "100%",
  },
  references: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  view: {
    padding: 8,
    fontSize: 18,
  },
  value: {
    fontSize: 18,
    padding: 8,
    marginTop: 1,
  },
  title: {
    fontSize: 19,
    fontWeight: "600",
  },
});
