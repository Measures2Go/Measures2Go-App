import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import HyperlinkText from "../HyperlinkText";

export default function () {
  return (
    <ScrollView style={styles.root}>
      <View>
        <Text>
          Modified Ashworth is used for grading spasticity 0 - No increase in
          muscle tone 1 - Slight increase in muscle tone, manifested by catch
          and release or minimal resistance at end range 1+ Slight increase in
          muscle tone, manifested by catch followed by minimal resistance
          through remainder (less than half) of ROM 2 - More marked increase in
          muscle tone through most of ROM, but affected part easily moved 3 -
          Considerable increase in muscle tone, passive movement difficult 4 -
          Affected part(s) rigid in flexion or extension
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
});
