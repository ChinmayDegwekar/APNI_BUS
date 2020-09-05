import React from "react";
import {
  TouchableOpacity,
  Text,
  Image,
  Button,
  SafeAreaView,
  StyleSheet,
  View,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

function DevelopersScreen({ navigation }) {
  return (
    <SafeAreaView>
      <TouchableOpacity>
        <Text style={styles.text}>
          <Text style={styles.capitalLetter}> Sagar</Text>
        </Text>
        <Image
          fadeDuration={500}
          style={styles.logo}
          source={require("../assets/Sagar.png")}
          onPress={() => navigation.navigate("./MenuScreen")}
        />

        <Text style={styles.text}>
          <Text style={styles.capitalLetter}> Chinmay</Text>
        </Text>
        <Image
          fadeDuration={500}
          style={styles.logo}
          source={require("../assets/Chinmay.png")}
          onPress={() => navigation.navigate("./MenuScreen")}
        />

        <Text style={styles.text}>
          <Text style={styles.capitalLetter}> Kishore</Text>
        </Text>
        <Image
          fadeDuration={500}
          style={styles.logo}
          source={require("../assets/Kishore.png")}
          onPress={() => navigation.navigate("./MenuScreen")}
        />

        <Text style={styles.text}>
          <Text style={styles.capitalLetter}> Sashwat</Text>
        </Text>
        <Image
          fadeDuration={500}
          style={styles.logo}
          source={require("../assets/Sashwat.png")}
          onPress={() => navigation.navigate("./MenuScreen")}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "space-between",
    marginTop: 70,
    marginLeft: 20,
    flexGrow: 100,
    borderRadius: 20,
    paddingLeft: 20,
  },
  text: {
    paddingTop: 5,
    paddingLeft: 20,
    color: "dodgerblue",
    fontSize: 20,
    fontWeight: "bold",
    textShadowColor: "darkblue",
    // textShadowOffset: { width: 2, height: 5 },
    // textShadowRadius: 5,
    alignSelf: "center",
    // paddingBottom: 23,
  },
  logo: {
    width: 100,
    height: 100,
    bottom: 20,
  },
  button: {
    backgroundColor: "#fc5c65",
    width: 66,
    height: 30,
    borderRadius: 10,
  },
});
export default DevelopersScreen;
