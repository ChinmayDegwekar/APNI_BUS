import React, { Component } from "react";
import { ScrollView } from "react-native-gesture-handler";
import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
} from "react-native";
import Autocomplete from "react-native-dropdown-autocomplete-textinput";
import { BusNumbersData } from "../data/bus-number-data";
import Toast from "react-native-simple-toast";
/*
Description : Shows the route sequence for a given bus number
Input : Bus number with autocomplete functionaliyt
Target Scren : Bus Route Screen
*/
class RouteFinderScreen extends Component {
  state = {
    bus_num: null,
  };
  render() {
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
        keyboardVerticalOffset={-500} // adjust the value here if you need more padding
      >
        <ScrollView>
          <View style={styles.container}>
            <SafeAreaView style={styles.container}>
              <Text style={styles.text}>
                <Text style={styles.capitalLetter}>Find Route</Text>
              </Text>
            </SafeAreaView>
            <Autocomplete
              style={styles.input}
              data={BUS_NUMBER_DATA}
              displayKey="bus_number"
              placeholder={"Bus Number"}
              onSelect={(value) => {
                console.log("value", value);
                console.log("value", value);
                this.state.bus_num = value.bus_number;
              }}
              maxHeight={150}
            />

            <TouchableOpacity
              style={styles.submitButton}
              onPress={() => {
                if (this.state.bus_num == null)
                  Toast.show("Please enter bus number", Toast.LONG);
                else
                  this.props.navigation.navigate("BusRouteActivity", {
                    bus_num: this.state.bus_num,
                  });
              }}
            >
              <Text style={styles.submitButtonText}> Find Route </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

export default RouteFinderScreen;
//STYLES of containers are defined here
//Convention : Name of style component to be arranged in a sorted order

const BUS_NUMBER_DATA = BusNumbersData();
const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  text: {
    color: "#41cdf4",
    fontSize: 36,
    fontWeight: "bold",
    textShadowColor: "darkblue",
    textShadowOffset: { width: 2, height: 5 },
    textShadowRadius: 5,
    alignSelf: "center",
    paddingBottom: 23,
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: "#7a42f4",
    borderWidth: 1,
  },
  submitButton: {
    backgroundColor: "#7a42f4",
    padding: 10,
    margin: 15,
    height: 40,
  },
  submitButtonText: {
    color: "white",
  },
});
