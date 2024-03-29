import React from "react";
import {
  SectionList,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import * as Measures from "./Measures";

interface IItemProps {
  title: string;
  link?: string;
  navigation: any;
}

function Item({ title, navigation, link }: IItemProps) {
  return (
    <TouchableHighlight
      onPress={() => link && navigation.navigate(link)}
      underlayColor="#ddd"
    >
      <View style={styles.item}>
        <Text style={styles.itemText}>{title}</Text>
      </View>
    </TouchableHighlight>
  );
}

interface IProps {
  navigation: any;
}

export default function ({ navigation }: IProps) {
  return (
    <SectionList
      style={styles.list}
      sections={Measures.navigation}
      renderItem={({ item }) => (
        <Item
          title={item.title}
          link={`Measure:${item.title}`}
          navigation={navigation}
        />
      )}
      keyExtractor={(item, index) => item.title + index}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.header}>{title}</Text>
      )}
      ItemSeparatorComponent={() => <View style={[styles.separator]} />}
    />
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 10,
    height: 44,
    justifyContent: "center",
  },
  itemText: {
    fontSize: 16,
  },
  list: {
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 18,
    padding: 5,
    paddingLeft: 10,
    backgroundColor: "#eee",
  },
  separator: {
    backgroundColor: "#eee",
    height: 1,
    marginLeft: 10,
  },
});
