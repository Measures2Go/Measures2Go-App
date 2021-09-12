import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import HyperlinkText from "../HyperlinkText";

export default function () {
  return (
    <ScrollView style={styles.root}>
      <View style={styles.view}>
        <Text style={styles.title}>
          Modified Ashworth is used for grading spasticity
        </Text>
        <Text style={styles.value}>0 - No increase in muscle tone</Text>
        <Text style={styles.value}>
          1 - Slight increase in muscle tone, manifested by catch and release or
          minimal resistance at end range
        </Text>
        <Text style={styles.value}>
          1+ Slight increase in muscle tone, manifested by catch followed by
          minimal resistance through remainder (less than half) of ROM
        </Text>
        <Text style={styles.value}>
          2 - More marked increase in muscle tone through most of ROM, but
          affected part easily moved
        </Text>
        <Text style={styles.value}>
          3 - Considerable increase in muscle tone, passive movement difficult
        </Text>
        <Text style={styles.value}>
          4 -Affected part(s) rigid in flexion or extension
        </Text>
        <Text style={{ marginTop: 12, fontSize: 24, marginBottom: 5 }}>
          References:
        </Text>
        <View style={styles.references}>
          <HyperlinkText href="https://www.ncbi.nlm.nih.gov/books/NBK554572/">
            Modified Ashworth Scale”
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
  text: {
    fontSize: 18,
  },
  value: {
    fontSize: 18,
    padding: 8,
    marginTop: 1,
  },
  view: {
    padding: 8,
  },
  title: {
    fontSize: 19,
    fontWeight: "600",
  },
});
