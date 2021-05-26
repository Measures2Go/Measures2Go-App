import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HyperlinkText from "../HyperlinkText";
import Measure from "./Measure";

const data = [
  // Item 1
  {
    title: "SITTING TO STANDING",
    instructions: "Please stand up. Try not to use your hand for support.",
    data: [
      {
        value: 4,
        text: "able to stand without using hands and stabilize independently",
      },
      { value: 3, text: "able to stand independently using hands" },
      { value: 2, text: "able to stand using hands after several tries" },
      { value: 1, text: "needs minimal aid to stand or to stabilize" },
      { value: 0, text: "needs moderate or maximal assist to stand" },
    ],
  },

  // Item 2
  {
    title: "STANDING UNSUPPORTED",
    instructions: "Please stand for two minutes without holding on.",
    data: [
      { value: 4, text: "able to stand safely for 2 minutes" },
      { value: 3, text: "able to stand 2 minutes with supervision" },
      { value: 2, text: "able to stand 30 seconds unsupported" },
      {
        value: 1,
        text: "needs several tries to stand 30 seconds unsupported",
      },
      { value: 0, text: "unable to stand 30 seconds unsupported" },
    ],
  },

  // Item 3
  {
    title:
      "SITTING WITH BACK UNSUPPORTED BUT FEET SUPPORTED ON FLOOR OR ON A STOOL",
    instructions:
      "Please sit with arms folded for 2 minutes. NOTE: If a subject is able to stand 2 minutes unsupported, score full points for this item and proceed to Item 4 ",
    data: [
      { value: 4, text: "able to sit safely and securely for 2 minutes" },
      { value: 3, text: "able to sit 2 minutes under supervision" },
      { value: 2, text: "able to able to sit 30 seconds" },
      { value: 1, text: "able to sit 10 seconds" },
      { value: 0, text: "unable to sit without support 10 seconds" },
    ],
  },

  // Item 4
  {
    title: "STANDING TO SITTING",
    instructions: "Please sit down.",
    data: [
      { value: 4, text: "sits safely with minimal use of hands" },
      { value: 3, text: "controls descent by using hands" },
      {
        value: 2,
        text: "uses back of legs against chair to control descent",
      },
      { value: 1, text: "sits independently but has uncontrolled descent" },
      { value: 0, text: "needs assist to sit" },
    ],
  },

  // Item 5
  {
    title: "TRANSFERS",
    instructions:
      "Arrange chair(s) for pivot transfer. Ask subject to transfer one way toward a seat with armrests and one way toward a seat without armrests. You may use two chairs (one with and one without armrests) or a bed and a chair.",
    data: [
      { value: 4, text: "able to transfer safely with minor use of hands" },
      { value: 3, text: "able to transfer safely definite need of hands" },
      {
        value: 2,
        text: "able to transfer with verbal cuing and/or supervision",
      },
      { value: 1, text: "needs one person to assist" },
      {
        value: 0,
        text: "needs two people to assist or supervise to be safe",
      },
    ],
  },

  // Item 6
  {
    title: "STANDING UNSUPPORTED WITH EYES CLOSED",
    instructions: "Please close your eyes and stand still for 10 seconds",
    data: [
      { value: 4, text: "able to stand 10 seconds safely" },
      { value: 3, text: "able to stand 10 seconds with supervision" },
      { value: 2, text: "able to stand 3 seconds" },
      {
        value: 1,
        text: "unable to keep eyes closed 3 seconds but stays safely",
      },
      { value: 0, text: "needs help to keep from falling" },
    ],
  },

  // Item 7
  {
    title: "STANDING UNSUPPORTED WITH FEET TOGETHER",
    instructions: "Place your feet together and stand without holding on.",
    data: [
      {
        value: 4,
        text: "able to place feet together independently and stand 1 minute safely",
      },
      {
        value: 3,
        text: "able to place feet together independently and stand 1 minute with supervision",
      },
      {
        value: 2,
        text: "able to place feet together independently but unable to hold for 30 seconds",
      },
      {
        value: 1,
        text: "needs help to attain position but able to stand 15 seconds feet together",
      },
      {
        value: 0,
        text: "needs help to attain position and unable to hold for 15 seconds",
      },
    ],
  },

  // Item 8
  {
    title: "REACHING FORWARD WITH OUTSTRETCHED ARM WHILE STANDING",
    instructions:
      "Lift arm to 90 degrees. Stretch out your fingers and reach forward as far as you can. (Examiner places a ruler at the end of fingertips when arm is at 90 degrees. Fingers should not touch the ruler while reaching forward. The recorded measure is the distance forward that the fingers reach while the subject is in the most forward lean position. When possible, ask subject to use both arms when reaching to avoid rotation of the trunk.)",
    data: [
      { value: 4, text: "can reach forward confidently 25 cm (10 inches)" },
      { value: 3, text: "can reach forward 12 cm (5 inches)" },
      { value: 2, text: "can reach forward 5 cm (2 inches)" },
      { value: 1, text: "reaches forward but needs supervision" },
      {
        value: 0,
        text: "loses balance while trying/requires external support",
      },
    ],
  },

  // Item 9
  {
    title: "PICK UP OBJECT FROM THE FLOOR FROM A STANDING POSITION",
    instructions: "Pick up the shoe/slipper, which is in front of your feet.",
    data: [
      { value: 4, text: "able to pick up slipper safely and easily " },
      { value: 3, text: "able to pick up slipper but needs supervision" },
      {
        value: 2,
        text: "unable to pick up but reaches 2-5 cm(1-2 inches) from slipper and keeps balance independently",
      },
      {
        value: 1,
        text: "unable to pick up and needs supervision while trying",
      },
      {
        value: 0,
        text: "unable to try/needs assist to keep from losing balance or falling",
      },
    ],
  },

  // Item 10
  {
    title:
      "TURNING TO LOOK BEHIND OVER LEFT AND RIGHT SHOULDERS WHILE STANDING",
    instructions:
      "Turn to look directly behind you over toward the left shoulder. Repeat to the right. (Examiner may pick an object to look at directly behind the subject to encourage a better twist turn.) ",
    data: [
      {
        value: 4,
        text: "looks behind from both sides and weight shifts well",
      },
      {
        value: 3,
        text: "looks behind one side only other side shows less weight shift",
      },
      { value: 2, text: "turns sideways only but maintains balance" },
      { value: 1, text: "needs supervision when turning" },
      {
        value: 0,
        text: "needs assist to keep from losing balance or falling",
      },
    ],
  },

  // Item 11
  {
    title: "TURN 360 DEGREES",
    instructions:
      "Turn completely around in a full circle. Pause. Then turn a full circle in the other direction.",
    data: [
      {
        value: 4,
        text: "able to turn 360 degrees safely in 4 seconds or less",
      },
      {
        value: 3,
        text: "able to turn 360 degrees safely one side only 4 seconds or less",
      },
      { value: 2, text: "able to turn 360 degrees safely but slowly" },
      { value: 1, text: "needs close supervision or verbal cuing" },
      { value: 0, text: "needs assistance while turning" },
    ],
  },

  // Item 12
  {
    title: "PLACE ALTERNATE FOOT ON STEP OR STOOL WHILE STANDING UNSUPPORTED",
    instructions:
      "Place each foot alternately on the step/stool. Continue until each foot has touched the step/stool four times.",
    data: [
      {
        value: 4,
        text: "able to stand independently and safely and complete 8 steps in 20 seconds",
      },
      {
        value: 3,
        text: "able to stand independently and complete 8 steps in > 20 seconds",
      },
      {
        value: 2,
        text: "able to complete 4 steps without aid with supervision",
      },
      { value: 1, text: "able to complete > 2 steps needs minimal assist" },
      {
        value: 0,
        text: "needs assistance to keep from falling/unable to try",
      },
    ],
  },

  // Item 13
  {
    title: "STANDING UNSUPPORTED ONE FOOT IN FRONT",
    instructions:
      "(DEMONSTRATE TO SUBJECT) Place one foot directly in front of the other. If you feel that you cannot place your foot directly in front, try to step far enough ahead that the heel of your forward foot is ahead of the toes of the other foot. (To score 3 points, the length of the step should exceed the length of the other foot and the width of the stance should approximate the subject's normal stride width.)",
    data: [
      {
        value: 4,
        text: "able to place foot tandem independently and hold 30 seconds",
      },
      {
        value: 3,
        text: "able to place foot ahead independently and hold 30 seconds",
      },
      {
        value: 2,
        text: "able to take small step independently and hold 30 seconds",
      },
      { value: 1, text: "needs help to step but can hold 15 seconds" },
      { value: 0, text: "loses balance while stepping or standing" },
    ],
  },

  // Item 14
  {
    title: "STANDING ON ONE LEG",
    instructions: "Stand on one leg as long as you can without holding on",
    data: [
      {
        value: 4,
        text: "able to lift leg independently and hold > 10 seconds",
      },
      {
        value: 3,
        text: "able to lift leg independently and hold 5-10 seconds",
      },
      {
        value: 2,
        text: "able to lift leg independently and hold = 3 seconds",
      },
      {
        value: 1,
        text: "tries to lift leg unable to hold 3 seconds but remains standing independently.",
      },
      { value: 0, text: "unable to try of needs assist to prevent fall" },
    ],
  },
];

const instructions =
  "Berg Balance Scale is used to assess balance and predict fall risk among community-living older adults. Yardstick, chair, and footstool are required.";

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
      <Text style={styles.detail}>Diagnosis: {result}</Text>

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
