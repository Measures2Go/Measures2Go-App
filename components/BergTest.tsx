import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";

const data = [
  // Item 1
  {
    title: "SITTING TO STANDING",
    instructions: "Please stand up. Try not to use your hand for support.",
    data: [
      "(4) able to stand without using hands and stabilize independently",
      "(3) able to stand independently using hands",
      "(2) able to stand using hands after several tries",
      "(1) needs minimal aid to stand or to stabilize",
      "(0) needs moderate or maximal assist to stand",
    ],
  },

  // Item 2
  {
    title: "STANDING UNSUPPORTED",
    instructions: "Please stand for two minutes without holding on.",
    data: [
      "(4) able to stand safely for 2 minutes",
      "(3) able to stand 2 minutes with supervision",
      "(2) able to stand 30 seconds unsupported",
      "(1) needs several tries to stand 30 seconds unsupported",
      "(0) unable to stand 30 seconds unsupported",
    ],
  },

  // Item 3
  {
    title:
      "SITTING WITH BACK UNSUPPORTED BUT FEET SUPPORTED ON FLOOR OR ON A STOOL",
    instructions:
      "Please sit with arms folded for 2 minutes. NOTE: If a subject is able to stand 2 minutes unsupported, score full points for this item and proceed to Item 4 ",
    data: [
      "(4) able to sit safely and securely for 2 minutes",
      "(3) able to sit 2 minutes under supervision",
      "(2) able to able to sit 30 seconds",
      "(1) able to sit 10 seconds",
      "(0) unable to sit without support 10 seconds",
    ],
  },

  // Item 4
  {
    title: "STANDING TO SITTING",
    instructions: "Please sit down.",
    data: [
      "(4) sits safely with minimal use of hands",
      "(3) controls descent by using hands",
      "(2) uses back of legs against chair to control descent",
      "(1) sits independently but has uncontrolled descent",
      "(0) needs assist to sit",
    ],
  },

  // Item 5
  {
    title: "TRANSFERS",
    instructions:
      "Arrange chair(s) for pivot transfer. Ask subject to transfer one way toward a seat with armrests and one way toward a seat without armrests. You may use two chairs (one with and one without armrests) or a bed and a chair.",
    data: [
      "(4) able to transfer safely with minor use of hands",
      "(3) able to transfer safely definite need of hands",
      "(2) able to transfer with verbal cuing and/or supervision",
      "(1) needs one person to assist",
      "(0) needs two people to assist or supervise to be safe",
    ],
  },

  // Item 6
  {
    title: "STANDING UNSUPPORTED WITH EYES CLOSED",
    instructions: "Please close your eyes and stand still for 10 seconds",
    data: [
      "(4) able to stand 10 seconds safely",
      "(3) able to stand 10 seconds with supervision",
      "(2) able to stand 3 seconds",
      "(1) unable to keep eyes closed 3 seconds but stays safely",
      "(0) needs help to keep from falling",
    ],
  },

  // Item 7
  {
    title: "STANDING UNSUPPORTED WITH FEET TOGETHER",
    instructions: "Place your feet together and stand without holding on.",
    data: [
      "(4) able to place feet together independently and stand 1 minute safely",
      "(3) able to place feet together independently and stand 1 minute with supervision",
      "(2) able to place feet together independently but unable to hold for 30 seconds",
      "(1) needs help to attain position but able to stand 15 seconds feet together",
      "(0) needs help to attain position and unable to hold for 15 seconds",
    ],
  },

  // Item 8
  {
    title: "REACHING FORWARD WITH OUTSTRETCHED ARM WHILE STANDING",
    instructions:
      "Lift arm to 90 degrees. Stretch out your fingers and reach forward as far as you can. (Examiner places a ruler at the end of fingertips when arm is at 90 degrees. Fingers should not touch the ruler while reaching forward. The recorded measure is the distance forward that the fingers reach while the subject is in the most forward lean position. When possible, ask subject to use both arms when reaching to avoid rotation of the trunk.)",
    data: [
      "(4) can reach forward confidently 25 cm (10 inches)",
      "(3) can reach forward 12 cm (5 inches)",
      "(2) can reach forward 5 cm (2 inches)",
      "(1) reaches forward but needs supervision",
      "(0) loses balance while trying/requires external support",
    ],
  },

  // Item 9
  {
    title: "PICK UP OBJECT FROM THE FLOOR FROM A STANDING POSITION",
    instructions: "Pick up the shoe/slipper, which is in front of your feet.",
    data: [
      "(4) able to pick up slipper safely and easily ",
      "(3) able to pick up slipper but needs supervision",
      "(2) unable to pick up but reaches 2-5 cm(1-2 inches) from slipper and keeps balance independently",
      "(1) unable to pick up and needs supervision while trying",
      "(0) unable to try/needs assist to keep from losing balance or falling",
    ],
  },

  // Item 10
  {
    title:
      "TURNING TO LOOK BEHIND OVER LEFT AND RIGHT SHOULDERS WHILE STANDING",
    instructions:
      "Turn to look directly behind you over toward the left shoulder. Repeat to the right. (Examiner may pick an object to look at directly behind the subject to encourage a better twist turn.) ",
    data: [
      "(4) looks behind from both sides and weight shifts well",
      "(3) looks behind one side only other side shows less weight shift",
      "(2) turns sideways only but maintains balance",
      "(1) needs supervision when turning",
      "(0) needs assist to keep from losing balance or falling",
    ],
  },

  // Item 11
  {
    title: "TURN 360 DEGREES",
    instructions:
      "Turn completely around in a full circle. Pause. Then turn a full circle in the other direction.",
    data: [
      "(4) able to turn 360 degrees safely in 4 seconds or less",
      "(3) able to turn 360 degrees safely one side only 4 seconds or less",
      "(2) able to turn 360 degrees safely but slowly",
      "(1) needs close supervision or verbal cuing",
      "(0) needs assistance while turning",
    ],
  },

  // Item 12
  {
    title: "PLACE ALTERNATE FOOT ON STEP OR STOOL WHILE STANDING UNSUPPORTED",
    instructions:
      "Place each foot alternately on the step/stool. Continue until each foot has touched the step/stool four times.",
    data: [
      "(4) able to stand independently and safely and complete 8 steps in 20 seconds",
      "(3) able to stand independently and complete 8 steps in > 20 seconds",
      "(2) able to complete 4 steps without aid with supervision",
      "(1) able to complete > 2 steps needs minimal assist",
      "(0) needs assistance to keep from falling/unable to try",
    ],
  },

  // Item 13
  {
    title: "STANDING UNSUPPORTED ONE FOOT IN FRONT",
    instructions:
      "(DEMONSTRATE TO SUBJECT) Place one foot directly in front of the other. If you feel that you cannot place your foot directly in front, try to step far enough ahead that the heel of your forward foot is ahead of the toes of the other foot. (To score 3 points, the length of the step should exceed the length of the other foot and the width of the stance should approximate the subject's normal stride width.)",
    data: [
      "(4) able to place foot tandem independently and hold 30 seconds",
      "(3) able to place foot ahead independently and hold 30 seconds",
      "(2) able to take small step independently and hold 30 seconds",
      "(1) needs help to step but can hold 15 seconds",
      "(0) loses balance while stepping or standing",
    ],
  },

  // Item 14
  {
    title: "STANDING ON ONE LEG",
    instructions: "Stand on one leg as long as you can without holding on",
    data: [
      "(4) able to lift leg independently and hold > 10 seconds",
      "(3) able to lift leg independently and hold 5-10 seconds",
      "(2) able to lift leg independently and hold = 3 seconds",
      "(1) tries to lift leg unable to hold 3 seconds but remains standing independently.",
      "(0) unable to try of needs assist to prevent fall",
    ],
  },
];

type Item =
  | {
      type: "title";
      title: string;
      instructions: string;
    }
  | {
      type: "data";
      value: string;
    };

const items = data.reduce((acc, val) => {
  acc.push({
    type: "title",
    title: val.title,
    instructions: val.instructions,
  });

  for (const d of val.data) {
    acc.push({ type: "data", value: d });
  }

  return acc;
}, [] as Item[]);

interface IItemProps {
  title: string;
}

function Item({ item }: { item: Item }) {
  if (item.type === "data") {
    return (
      <TouchableHighlight onPress={() => {}} underlayColor="#ddd">
        <View style={styles.item}>
          <Text style={styles.itemText}>{item.value}</Text>
        </View>
      </TouchableHighlight>
    );
  } else {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>{item.title}</Text>
        <Text style={styles.instructions}>{item.instructions}</Text>
      </View>
    );
  }
}

export default function () {
  return (
    <FlatList
      style={styles.list}
      data={items}
      renderItem={({ item }) => <Item item={item} />}
      keyExtractor={(item, index) => `${index}`}
      ItemSeparatorComponent={() => <View style={[styles.separator]} />}
    />
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 10,
    minHeight: 44,
    justifyContent: "center",
  },
  itemText: {
    fontSize: 16,
  },
  list: {
    backgroundColor: "#fff",
  },
  header: {
    padding: 5,
    paddingLeft: 10,
    backgroundColor: "#eee",
  },
  headerText: {
    fontSize: 18,
  },
  instructions: {
    marginTop: 5,
    fontSize: 14,
  },
  separator: {
    backgroundColor: "#eee",
    height: 1,
    marginLeft: 10,
  },
});
