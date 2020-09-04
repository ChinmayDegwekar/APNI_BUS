import React, { Component } from "react";
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
import { Header } from "@react-navigation/stack";
import { ScrollView } from "react-native-gesture-handler";
import { YellowBox } from "react-native";
import { BusStopsData, renderBusStopNames } from "../data/bus-stops-data";
import Toast from "react-native-simple-toast";

YellowBox.ignoreWarnings([
  "VirtualizedLists should never be nested",
  "Failed prop type",
]);

/*
Description : Shows input options of source and destination to track a bus
Input : Source , Destinati0on
Target Screen : ListBusTrackScreen
*/
class TrackBusScreen extends Component {
  state = {
    source: null,
    destination: null,
    src_id: "",
    dest_id: "",
    timestamp: "",
  };

  componentDidMount() {
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var sec = new Date().getSeconds(); //Current Seconds
    var ts = hours + ":" + min + ":" + sec;
    this.setState({ timestamp: ts });
    console.log(ts);
    console.disableYellowBox = true;
  }
  handleSource = (text) => {
    this.setState({ source: text });
  };
  handledestination = (text) => {
    this.setState({ destination: text });
  };
  trackBus = (source, destination) => {
    alert("Source: " + source + " Destination: " + destination);
  };
  render() {
    return (
      // <KeyboardAvoidingView
      //   style={styles.container}
      //   behavior="padding"
      //   keyboardVerticalOffset={-500} // adjust the value here if you need more padding
      // >
      // <ScrollView>
      <View style={styles.container}>
        <SafeAreaView style={styles.container}>
          <Text style={styles.text}>
            <Text style={styles.capitalLetter}>Track Bus</Text>
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

        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => {
            if (this.state.source == null || this.state.destination == null)
              Toast.show("Please select source and destination", Toast.LONG);
            else if (this.state.source == this.state.destination)
              Toast.show("Source and destination is same ", Toast.LONG);
            else
              this.props.navigation.navigate("ListBusTrackActivity", {
                source: this.state.source,
                destination: this.state.destination,
                src_id: this.state.src_id,
                dest_id: this.state.dest_id,
                timestamp: this.state.timestamp,
              });
          }}
        >
          <Text style={styles.submitButtonText}> Submit </Text>
        </TouchableOpacity>
      </View>
      // </ScrollView>
      // </KeyboardAvoidingView>
    );
  }
}
export default TrackBusScreen;

const BUS_NUMBER_DATA = BusNumbersData();
const BUS_DATA = BusStopsData();
const styles = StyleSheet.create({
  container: {
    paddingTop: 5,
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
