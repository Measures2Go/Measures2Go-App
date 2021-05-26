import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import HyperlinkText from "../HyperlinkText";

export default function () {
  return (
    <ScrollView style={styles.root}>
      <View>
        <Text>Use and scale itself</Text>
        <Text>
          0+ No pitting edema 1+ Mild pitting edema; 2mm depression that
          disappears quickly 2+ Moderate pitting edema; 4mm depression that
          disappears in 10-15 sec 3+ Moderately severe pitting edema; 6mm
          depression which may last for more than 1 minute 4+ Severe pitting
          edema; 8mm depression which lasts more than 2 minutes
        </Text>

        <Text>Pearls re: use</Text>
        <Text>
          To assess pitting of edematous extremities: examiner presses with
          thumb for approx. 2 seconds to displace interstitial fluid, observes
          degree of depression and time for area to refill Commonly tested areas
          include dorsum of foot, posterior to medial malleolus, and lower calf
        </Text>

        <Text style={{ marginTop: 12, fontSize: 24, marginBottom: 5 }}>
          References:
        </Text>
        <View style={styles.references}>
          <HyperlinkText href="https://www.ncbi.nlm.nih.gov/books/NBK348/">
            Understanding clinical significance
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
