import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import MenuScreen from "./app/screens/MenuScreen";
import { render } from "react-dom";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import BusFinderScreen from "./app/screens/BusFinderScreen";
import TrackBusScreen from "./app/screens/TrackBusScreen";
import FareCalculatorScreen from "./app/screens/FareCalculatorScreen";
import ListBusScreen from "./app/screens/ListBusScreen";
import ListBusTrackScreen from "./app/screens/ListBusTrackScreen";
import BusTrackMapScreen from "./app/screens/BusTrackMapScreen";
import RouteFinderScreen from "./app/screens/RouteFinderScreen";
import BusRouteScreen from "./app/screens/BusRouteScreen";

export default function App() {
  console.log("app started");
  return (
    // Navigation container to control the movement across different screens
    //CONVENTION : Screens have subscript = ...Screen
    //           : Reference to them have subscript : ...Activity
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainActivity">
        <Stack.Screen name="MainActivity" component={WelcomeScreen} />
        <Stack.Screen name="MenuActivity" component={MenuScreen} />
        <Stack.Screen name="BusFinderActivity" component={BusFinderScreen} />
        <Stack.Screen name="TrackBusActivity" component={TrackBusScreen} />
        <Stack.Screen
          name="RouteFinderActivity"
          component={RouteFinderScreen}
        />
        <Stack.Screen
          name="FareCalculatorActivity"
          component={FareCalculatorScreen}
        />
        <Stack.Screen name="ListBusActivity" component={ListBusScreen} />
        <Stack.Screen
          name="ListBusTrackActivity"
          component={ListBusTrackScreen}
        />
        <Stack.Screen name="BusRouteActivity" component={BusRouteScreen} />
        <Stack.Screen
          name="BusTrackMapActivity"
          component={BusTrackMapScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );

  console.disableYellowBox = true;
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
