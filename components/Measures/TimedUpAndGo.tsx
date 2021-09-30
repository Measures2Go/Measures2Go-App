import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const data = [
  {
    title: "Use and equipment",
    text: [
      "TUG is used as a quick assessment for prediction of fall risk and comparison of functional capacity - for example, between two visits six months apart.",
      "To perform, a stopwatch, a chair with arms, a visual target such as a line drawn or taped onto the floor, and an area where a patient can walk at least 10 feet are required. Patients can use assistive devices if they do so normally, and should use their normal footwear. ",
    ],
  },
  {
    title: "Instruction to patient",
    text: 'When I say "Go," I want you to stand up from the chair, walk to the line (or other visual target positioned 3 meters or 10 feet away from the chair) on the floor at your normal pace, turn, walk back to the chair at your normal pace, and sit down again. ',
  },
  {
    title: "Cutoffs",
    text: "12 seconds is used as a cutoff for predicting fall risk, per CDC. ",
  },
  {
    title: "Considerations",
    text: "Guard the patient as you would while performing any other functional test, consider scoring multiple trials, document equipment used and any other information which would facilitate repeat testing at a later appointment (device, footwear, guarding) and observe for gait abnormalities which may include: Slow, tentative pace, delayed initiation, impaired foot clearance, shuffling, balance loss, deviation from a straight path, reduced stride length, reduced arm swing, reaching for support, en-bloc turning, inappropriate use of assistive device",
  },
];

export default function () {
  return (
    <ScrollView style={styles.root}>
      <View style={styles.view}>
        {data.map((val, idx) => {
          return (
            <React.Fragment key={idx}>
              <Text style={styles.title}>{val.title}</Text>
              {Array.isArray(val.text) ? (
                val.text.map((t) => <Text style={styles.value}>{t}</Text>)
              ) : (
                <Text style={styles.value}>{val.text}</Text>
              )}
              {/* <Text style={styles.value}>{val.text}</Text> */}
            </React.Fragment>
          );
        })}
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
  value: {
    fontSize: 18,
    marginTop: 4,
    marginBottom: 8,
  },
  view: {
    padding: 8,
  },
  title: {
    fontSize: 19,
    fontWeight: "600",
    marginTop: 10,
  },
});
