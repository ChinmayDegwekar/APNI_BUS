import React, { Component } from "react";
import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";

class TrackBusScreen extends Component {
  state = {
    source: "",
    destination: "",
  };
  handleSource = (text) => {
    this.setState({ source: text });
  };
  handledestination = (text) => {
    this.setState({ destinationdestination: text });
  };
  trackBus = (source, destination) => {
    alert("Source: " + source + " Destination: " + destination);
  };
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.container}>
          <Text style={styles.text}>
            <Text style={styles.capitalLetter}>Track Bus</Text>
          </Text>
        </SafeAreaView>
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Source"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          onChangeText={this.handlesource}
        />

        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Destination"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          onChangeText={this.handledestination}
        />

        <TouchableOpacity
          style={styles.submitButton}
          onPress={() =>
            this.trackBus(this.state.source, this.state.destination)
          }
        >
          <Text style={styles.submitButtonText}> Submit </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default TrackBusScreen;

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
