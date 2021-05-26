import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SegmentedControl from "@react-native-segmented-control/segmented-control";
import { StyleSheet } from "react-native";
import MeasuresList from "./components/MeasuresList";
import Clinicals from "./components/Clinicals";
import * as Measures from "./components/Measures";
import * as _ from "lodash";

const Stack = createStackNavigator();

type SegmentValues = "measures" | "clinicals";

interface IHeaderTitleProps {
  onChange(value: SegmentValues): void;
}

const HeaderTitle = ({ onChange }: IHeaderTitleProps) => {
  return (
    <SegmentedControl
      style={styles.segmentContainer}
      values={["Measures", "Clinicals"]}
      selectedIndex={0}
      onChange={(e) =>
        onChange(
          e.nativeEvent.selectedSegmentIndex === 0 ? "measures" : "clinicals"
        )
      }
    />
  );
};

const styles = StyleSheet.create({
  segmentContainer: {
    width: 200,
  },
});

export default function App() {
  const [tab, setTab] = React.useState<SegmentValues>("measures");

  const measureStacks = React.useMemo(() => {
    const components: React.ReactNode[] = [];

    for (const nav of Measures.navigation) {
      for (const test of nav.data) {
        if (test.component) {
          const name = `Measure:${test.title}`;
          components.push(
            <Stack.Screen
              key={name}
              name={name}
              component={test.component}
              options={{
                title: test.title,
              }}
            />
          );
        }
      }
    }

    return components;
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={tab === "measures" ? MeasuresList : Clinicals}
          options={{ headerTitle: () => <HeaderTitle onChange={setTab} /> }}
        />
        {measureStacks}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
