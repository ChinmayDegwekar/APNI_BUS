import React, { Component } from "react";
import { BusStopsData, renderBusStopNames } from "../data/bus-stops-data";
import Autocomplete from "react-native-dropdown-autocomplete-textinput";
import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";

class BusFinderScreen extends Component {
  state = {
    source: "",
    destination: "",
    src_id: "",
    dest_id: "",
  };
  handleSource = (text) => {
    this.setState({ source: text });
  };
  handledestination = (text) => {
    this.setState({ destination: text });
  };
  busFinder = (source, destination) => {
    alert("Source: " + source + " Destination: " + destination);
  };
  render() {
    const { query } = this.state;
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.container}>
          <Text style={styles.text}>
            <Text style={styles.capitalLetter}> Bus Finder</Text>
          </Text>
        </SafeAreaView>
        <View style={styles.dropdown}>
          <Autocomplete
            style={styles.input}
            data={BUS_DATA}
            displayKey="stop_name"
            placeholder={"Source"}
            onSelect={(value) => {
              console.log("value", value);
              this.handleSource(value.stop_name);
              this.state.src_id = value.stop_id;
            }}
            maxHeight={150} //Controls visible options
          />
          {/* <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Source"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          onChangeText={this.handlesource}
        /> */}
          <Autocomplete
            style={styles.input}
            data={BUS_DATA}
            displayKey="stop_name"
            placeholder={"Destination"}
            onSelect={(value) => {
              console.log("value", value);
              this.handledestination(value.stop_name);
              this.state.dest_id = value.stop_id;
            }}
            maxHeight={150}
          />
        </View>
        {/* <TextInput

          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Destination"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          onChangeText={this.handledestination}
        /> */}

        <TouchableOpacity
          style={styles.submitButton}
          onPress={() =>
            this.props.navigation.navigate("ListBusActivity", {
              source: this.state.source,
              destination: this.state.destination,
              src_id: this.state.src_id,
              dest_id: this.state.dest_id,
            })
          }
        >
          <Text style={styles.submitButtonText}> Submit </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default BusFinderScreen;

const DATA = [
  { code: "AP", name: "Andhra Pradesh" },
  { code: "AR", name: "Arunachal Pradesh" },
];
const BUS_DATA = BusStopsData();
const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  dropdown: {},

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
