import React from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

interface IProps {
  text: string;
  checked: boolean;
  handlePress: () => void;
}

export default function ({ handlePress, checked, text }: IProps) {
  return (
    <TouchableHighlight onPress={handlePress} underlayColor="#ddd">
      <View style={styles.item}>
        <Icon
          name={checked ? "checkmark-circle" : "ellipse-outline"}
          size={22}
          color="#000000"
        />
        <Text style={styles.itemText}>{text}</Text>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 10,
    minHeight: 44,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  itemText: {
    flex: 1,
    fontSize: 16,
    marginLeft: 6,
  },
});
