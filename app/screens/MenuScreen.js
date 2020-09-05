import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  Button,
  SafeAreaView,
  View,
} from "react-native";
/*
Description : Displays Apni Bus title and four buttons 
Input : Select one of the functionality
Target Screen : Each button click navigates to corresponding activity
*/
function MenuScreen({ navigation }) {
  return (
    //Main container covering entier screen, all sub container lies inside this
    <SafeAreaView style={styles.container}>
      <TouchableOpacity>
        <Text style={styles.text}>
          <Text style={styles.capitalLetter}> Apni Bus</Text>
        </Text>
      </TouchableOpacity>
      {/* Each view defines the container of corresponding button */}
      {/* TRACK BUS */}
      <View style={styles.buttonContainer}>
        <Button
          style={styles.button_TrackBus}
          // onPress={() => console.log("button pressed")}
          title="Track Bus"
          color="#6495ed"
          accessibilityLabel="Click to Enter"
          onPress={() => navigation.navigate("TrackBusActivity")}
        />
      </View>
      {/* BUS FINDER  */}
      <View style={styles.buttonContainer}>
        <Button
          style={styles.button_BusFinder}
          // onPress={() => console.log("button pressed")}
          title="Bus Finder"
          color="#00ced1"
          accessibilityLabel="Click to Enter"
          onPress={() => navigation.navigate("BusFinderActivity")}
        />
      </View>
      {/* ROUTE FINDER  */}
      <View style={styles.buttonContainer}>
        <Button
          style={styles.button_RouteFinder}
          // onPress={() => console.log("button pressed")}
          title="Route Finder"
          color="#6495ed"
          accessibilityLabel="Click to Enter"
          onPress={() => navigation.navigate("RouteFinderActivity")}
        />
      </View>
      {/* FARE CACULATOR  */}
      <View style={styles.buttonContainer}>
        <Button
          style={styles.button_FareCalculator}
          // onPress={() => console.log("button pressed")}
          title="Fare Calculator"
          color="#00ced1"
          accessibilityLabel="Click to Enter"
          onPress={() => navigation.navigate("FareCalculatorActivity")}
        />
      </View>
      <View style={styles.alternativeLayoutButtonContainer}>
        <Button
          onPress={() => navigation.navigate("Developers")}
          title="Developers"
          color="#6495ed"
        />
      </View>
    </SafeAreaView>
  );
}
//STYLES of containers are defined here
//Convention : Name of style component to be arranged in a sorted order

const styles = StyleSheet.create({
  alternativeLayoutButtonContainer: {
    width: 150,
    height: 60,
    alignSelf: "center",
    top: 20,
    bottom: 20,
  },
  button_TrackBus: {
    backgroundColor: "#fc5c65",
    width: 100,
    height: 30,
    alignSelf: "center",
    top: 20,
    bottom: 20,
  },
  button_BusFinder: {
    backgroundColor: "#fc5c65",
    width: 66,
    alignSelf: "flex-start",
    // height: 50,
    bottom: 20,
  },
  button_RouteFinder: {
    backgroundColor: "#fc5c65",
    width: 66,
    height: 30,
  },
  button_FareCalculator: {
    backgroundColor: "#fc5c65",
    width: "100%",
    height: 30,
  },
  buttonContainer: {
    margin: 20,
    // flexDirection: "row",
    // justifyContent: "space-between",
  },
  container: {
    paddingTop: 50,
    // paddingLeft: 15,
    // // paddingRight: 15,
    paddingBottom: 170,
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between",
    // alignItems: "center",
    // width: 300,
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
});

export default MenuScreen;
