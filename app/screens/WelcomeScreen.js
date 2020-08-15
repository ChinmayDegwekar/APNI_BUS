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

function WelcomeScreen({ navigation }) {
  console.log("Welcome called");
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity>
        <Image
          fadeDuration={500}
          style={styles.logo}
          source={require("../assets/ApniBusLogo.png")}
        />
      </TouchableOpacity>
      <Button
        style={styles.button}
        // onPress={() => console.log("button pressed")}
        title="BUS APP"
        color="blue"
        accessibilityLabel="Click to Enter"
        onPress={() => navigation.navigate("MenuActivity")}
      />

      {/* <StatusBar style="auto" /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
  button: {
    backgroundColor: "#fc5c65",
    width: 66,
    height: 30,
  },
});

export default WelcomeScreen;
