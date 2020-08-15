import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  Button,
  SafeAreaView,
} from "react-native";

function MenuScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity>
        <Text style={styles.text}>
          <Text style={styles.capitalLetter}> Apni Bus</Text>
        </Text>
      </TouchableOpacity>
      {/* <text>Apni Bus </text> */}
      <Button
        style={styles.button_TrackBus}
        // onPress={() => console.log("button pressed")}
        title="Track Bus"
        color="#7a42f4"
        accessibilityLabel="Click to Enter"
        onPress={() => navigation.navigate("TrackBusActivity")}
      />
      <Button
        style={styles.button_BusFinder}
        // onPress={() => console.log("button pressed")}
        title="Bus Finder"
        color="blue"
        accessibilityLabel="Click to Enter"
        onPress={() => navigation.navigate("BusFinderActivity")}
      />
      <Button
        style={styles.button_RouteFinder}
        // onPress={() => console.log("button pressed")}
        title="Route Finder"
        color="#7a42f4"
        accessibilityLabel="Click to Enter"
        onPress={() => navigation.navigate("RouteFinderActivity")}
      />
      <Button
        style={styles.button_FareCalculator}
        // onPress={() => console.log("button pressed")}
        title="Fare Calculator"
        color="blue"
        accessibilityLabel="Click to Enter"
        onPress={() => navigation.navigate("FareCalculatorActivity")}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 170,
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    color: "#41cdf4",
    fontSize: 45,
    fontWeight: "bold",
    textShadowColor: "darkblue",
    textShadowOffset: { width: 2, height: 5 },
    textShadowRadius: 5,
    alignSelf: "center",
    paddingBottom: 23,
  },
  // logo: {
  //   // color: blue,

  //   width: 210,
  //   height: 60,
  //   bottom: 40,
  //   alignSelf: "center",
  // },
  button_TrackBus: {
    backgroundColor: "#fc5c65",
    width: 60,
    height: 30,
    alignSelf: "center",
    top: 20,
    bottom: 20,
  },
  button_BusFinder: {
    backgroundColor: "#fc5c65",
    width: 66,
    alignSelf: "flex-start",
    height: 30,
    bottom: 20,
  },
  button_RouteFinder: {
    backgroundColor: "#fc5c65",
    width: 66,
    height: 30,
  },
  button_FareCalculator: {
    backgroundColor: "#fc5c65",
    width: 66,
    height: 30,
  },
});

export default MenuScreen;
