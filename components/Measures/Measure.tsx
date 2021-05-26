import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

type MeasureData = {
  type: "data";
  text: string;
  group: number;
  value: number;
};

type MeasureHeader = {
  type: "title";
  title: string;
  instructions: string | undefined;
  group: number;
};

type MeasureItem = MeasureHeader | MeasureData;

interface IIntroductionProps {
  text: string;
}

const Introduction = React.memo(({ text }: IIntroductionProps) => {
  return (
    <View style={styles.introduction}>
      <Text style={styles.introductionText}>{text}</Text>
    </View>
  );
});

interface ISummaryProps {
  total: number;
  renderResult: (result: number) => React.ReactNode;
}

const Summary = React.memo(({ renderResult, total }: ISummaryProps) => {
  return <View style={styles.summary}>{renderResult(total)}</View>;
});

interface IItemProps {
  readonly item: MeasureItem;
  readonly onPress: (item: MeasureItem) => void;
  readonly checked: boolean;
}

const Item = React.memo(({ item, onPress, checked }: IItemProps) => {
  const handlePress = React.useCallback(() => {
    onPress(item);
  }, [item, onPress]);

  if (item.type === "data") {
    return (
      <TouchableHighlight onPress={handlePress} underlayColor="#ddd">
        <View style={styles.item}>
          <Icon
            name={checked ? "checkmark-circle" : "ellipse-outline"}
            size={22}
            color="#000000"
          />
          <Text style={styles.itemText}>
            ({item.value}) {item.text}
          </Text>
        </View>
      </TouchableHighlight>
    );
  } else if (item.type === "title") {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>{item.title}</Text>
        {item.instructions && (
          <Text style={styles.instructions}>{item.instructions}</Text>
        )}
      </View>
    );
  } else {
    return <View />;
  }
});

export interface IMeasureItem {
  title: string;
  instructions?: string;
  data: ReadonlyArray<{
    value?: number;
    text: string;
  }>;
}

export interface IProps {
  items: ReadonlyArray<IMeasureItem>;
  instructions: string;
  renderResult: (result: number) => React.ReactNode;
}

export default function ({ items, renderResult, instructions }: IProps) {
  const [checked, setChecked] = React.useState(new Map<number, number>());

  const data = React.useMemo(() => {
    let data: MeasureItem[] = [];

    data = items.reduce((acc, val, idx) => {
      acc.push({
        type: "title",
        title: val.title,
        instructions: val.instructions,
        group: idx,
      });

      for (let i = 0; i < val.data.length; i++) {
        const d = val.data[i];

        acc.push({
          type: "data",
          text: d.text,
          group: idx,
          value: d.value ?? i,
        });
      }

      return acc;
    }, data);
    return data;
  }, [items]);

  const handlePress = React.useCallback(
    (item: MeasureItem) => {
      if (item.type !== "data") {
        return;
      }

      setChecked((s) => {
        const value = s.get(item.group);
        const n = new Map(s);
        if (value === item.value) {
          n.delete(item.group);
        } else {
          n.set(item.group, item.value);
        }
        return n;
      });
    },
    [setChecked]
  );

  return (
    <FlatList
      style={styles.list}
      data={data}
      ListHeaderComponent={() => <Introduction text={instructions} />}
      ListFooterComponent={() => {
        const total = [...checked.values()].reduce((a, v) => a + v, 0);
        return <Summary total={total} renderResult={renderResult} />;
      }}
      renderItem={({ item }) => {
        return (
          <Item
            item={item}
            checked={
              item.type === "data" && checked.get(item.group) === item.value
            }
            onPress={handlePress}
          />
        );
      }}
      keyExtractor={(item, index) => `${index}`}
      // ItemSeparatorComponent={() => <View style={[styles.separator]} />}
    />
  );
}

export const styles = StyleSheet.create({
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
  summary: {
    padding: 10,
    paddingLeft: 10,
    backgroundColor: "#eee",
    fontSize: 20,
  },
  summaryDetail: {
    fontSize: 20,
  },
  introduction: {
    padding: 5,
    paddingLeft: 10,
    backgroundColor: "#fff",
  },
  introductionText: {
    fontSize: 20,
  },
});
