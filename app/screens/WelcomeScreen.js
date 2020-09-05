import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  Button,
  SafeAreaView,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
/*
Description : This screen will display the app logo for 2 seconds and navigate to Menu
Input : None
Target Screen : MenuScreen
*/
function WelcomeScreen({ navigation }) {
  console.log("Welcome called");

  var delayInMilliseconds = 2000; //2 seconds
  var timeover = false;
  setTimeout(function () {
    //Splash scrren will be visible for 2 seconds
    timeover = true;
    //After that Navigate to Menu Screen
    navigation.navigate("MenuActivity");
  }, delayInMilliseconds);
  return (
    //Main container covering entier screen, all sub container lies inside this
    <SafeAreaView style={styles.container}>
      {/* // Safe Area View to make it screen size independent */}
      <TouchableOpacity>
        <Image
          fadeDuration={500}
          style={styles.logo}
          source={require("../assets/ApniBusLogo.png")}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
}
//STYLES of containers are defined here
//Convention : Name of style component to be arranged in a sorted order
const styles = StyleSheet.create({
  button: {
    backgroundColor: "#fc5c65",
    width: 66,
    height: 30,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  logo: {
    width: 366,
    height: 300,
    bottom: 20,
  },
});

export default WelcomeScreen;
