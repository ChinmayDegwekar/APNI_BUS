import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import MenuScreen from "./app/screens/MenuScreen";
import { render } from "react-dom";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// import BusFinder from "./app/screens/BusFinderScreen";
import BusFinderScreen from "./app/screens/BusFinderScreen";
import TrackBusScreen from "./app/screens/TrackBusScreen";
import FareCalculatorScreen from "./app/screens/FareCalculatorScreen";

export default function App() {
  console.log("app started");
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainActivity">
        <Stack.Screen name="MainActivity" component={WelcomeScreen} />
        <Stack.Screen name="MenuActivity" component={MenuScreen} />
        <Stack.Screen name="BusFinderActivity" component={BusFinderScreen} />
        <Stack.Screen name="TrackBusActivity" component={TrackBusScreen} />
        {/* <Stack.Screen name="RouteFinderActivity" component={Rou} /> */}
        <Stack.Screen
          name="FareCalculatorActivity"
          component={FareCalculatorScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
    // console.log('sdfsd');
    // <WelcomeScreen />
  );
}
const Stack = createStackNavigator();
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

// export default App;
