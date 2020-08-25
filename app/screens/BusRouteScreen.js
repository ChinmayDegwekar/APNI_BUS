import React, { Component } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  FlatList,
} from "react-native";
import Timeline from "react-native-timeline-flatlist";

class BusRouteScreen extends Component {
  constructor() {
    super();
    this.data = [
      { time: "", title: "Event 1", description: "Event 1 Description" },
      { time: "", title: "Event 2", description: "Event 2 Description" },
      { time: "", title: "Event 3", description: "Event 3 Description" },
      { time: "", title: "Event 4", description: "Event 4 Description" },
      { time: "", title: "Event 5", description: "Event 5 Description" },
      { time: "", title: "Event 1", description: "Event 1 Description" },
      { time: "", title: "Event 2", description: "Event 2 Description" },
      { time: "", title: "Event 3", description: "Event 3 Description" },
      { time: "", title: "Event 4", description: "Event 4 Description" },
      { time: "", title: "Event 5", description: "Event 5 Description" },
    ];
  }
  render() {
    return <Timeline data={this.data} />;
  }
}

export default BusRouteScreen;
