import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import HyperlinkText from "../HyperlinkText";

export default function () {
  return (
    <ScrollView style={styles.root}>
      <View style={styles.view}>
        <Text style={styles.title}>
          Richmond Agitation and Sedation Scale (RASS) is used to objectively
          capture degree of sedation
        </Text>
        <Text style={styles.value}>0 - No increase in muscle tone</Text>
        <Text style={styles.value}>
          +4 (Combative): Overly combative or violent; immediate danger to staff
        </Text>
        <Text style={styles.value}>
          +3 (Very agitated): Pulls on or removes tube(s) or catheter(s) or has
          aggressive behavior toward staff
        </Text>
        <Text style={styles.value}>
          +2 (Agitated): Frequent non-purposeful movement or patient-ventilator
          dyssynchrony
        </Text>
        <Text style={styles.value}>
          +1 (Restless): Anxious or apprehensive but movements not aggressive or
          vigorous
        </Text>
        <Text style={styles.value}>
          0 (Alert and calm): Spontaneously pays attention to caregiver
        </Text>
        <Text style={styles.value}>
          -1 (Drowsy): Not fully alert, but has sustained (more than 10 seconds)
          awakening, with eye contact to voice
        </Text>
        <Text style={styles.value}>
          -2 (Light sedation): Briefly (less than 10 seconds) awakens with eye
          contact to voice
        </Text>
        <Text style={styles.value}>
          -3 (Moderate sedation): Any movement (but no eye contact) to voice
        </Text>
        <Text style={styles.value}>
          -4 (Deep sedation): No response to voice, but any movement to physical
          stimulation
        </Text>
        <Text style={styles.value}>
          -5 (Unarousable): No response to voice or physical stimulation
        </Text>
        <Text style={{ marginTop: 12, fontSize: 24, marginBottom: 5 }}>
          References:
        </Text>
        <View style={styles.references}>
          <HyperlinkText href="https://pubmed.ncbi.nlm.nih.gov/16088675/">
            Multidisciplinary management of sedation and analgesia in critical
            care”
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
