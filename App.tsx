import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MeasuresList from "./components/MeasuresList";
import BergTest from "./components/BergTest";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MeasuresList"
          component={MeasuresList}
          options={{ title: "Home" }}
        />
        <Stack.Screen name="BergTest" component={BergTest} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
