import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import * as WebBrowser from "expo-web-browser";

const data = [
  {
    text: "Assessment Fundamentals",
    url: "https://wordpress.com/post/johncorsino.wordpress.com/2246",
  },
  {
    text: "Mental Status, Cognition, Motor Planning",
    url: "https://wordpress.com/post/johncorsino.wordpress.com/2250",
  },
  {
    text: "Musculoskeletal",
    url: "https://wordpress.com/post/johncorsino.wordpress.com/2258",
  },
  {
    text: "Cardiopulmonary",
    url: "https://wordpress.com/post/johncorsino.wordpress.com/2253",
  },
  {
    text: "Vestibular",
    url: "https://wordpress.com/post/johncorsino.wordpress.com/2260",
  },
  {
    text: "Integumentary",
    url: "https://wordpress.com/post/johncorsino.wordpress.com/2355",
  },
  {
    text: "ICU Considerations",
    url: "https://wordpress.com/post/johncorsino.wordpress.com/2314",
  },
  {
    text: "Labs",
    url: "https://wordpress.com/post/johncorsino.wordpress.com/2357",
  },
  {
    text: "Movement Disorders",
    url: "https://wordpress.com/post/johncorsino.wordpress.com/2319",
  },
  {
    text: "Gait",
    url: "https://wordpress.com/post/johncorsino.wordpress.com/2325",
  },
  {
    text: "Emergency Department Considerations",
    url: "https://wordpress.com/post/johncorsino.wordpress.com/2321",
  },
  {
    text: "Resources",
    url: "https://wordpress.com/post/johncorsino.wordpress.com/2155",
  },
];

async function showLink(url: string) {
  await WebBrowser.openBrowserAsync(url);
}

interface IItemProps {
  title: string;
  link: string;
  navigation: any;
}

function Item({ title, navigation, link }: IItemProps) {
  return (
    <TouchableHighlight
      onPress={() => link && showLink(link).catch((err) => console.error(err))}
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
    <FlatList
      style={styles.list}
      data={data}
      renderItem={({ item }) => (
        <Item title={item.text} link={item.url} navigation={navigation} />
      )}
      keyExtractor={(item, index) => item.text}
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
