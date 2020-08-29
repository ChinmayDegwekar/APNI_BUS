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

    this.state = {
      data: 1,
      isLoading: true,
    };

    // this.data = [
    //   { time: "", title: "Event 1", description: "Event 1 Description" },
    //   { time: "", title: "Event 2", description: "Event 2 Description" },
    //   { time: "", title: "Event 3", description: "Event 3 Description" },
    //   { time: "", title: "Event 4", description: "Event 4 Description" },
    //   { time: "", title: "Event 5", description: "Event 5 Description" },
    //   { time: "", title: "Event 1", description: "Event 1 Description" },
    //   { time: "", title: "Event 2", description: "Event 2 Description" },
    //   { time: "", title: "Event 3", description: "Event 3 Description" },
    //   { time: "", title: "Event 4", description: "Event 4 Description" },
    //   { time: "", title: "Event 5", description: "Event 5 Description" },
    // ];
  }
  generateRequiredFormat(json) {
    var result = [];
    var n = json["route"].length;
    for (var i = 0; i < n; i++) {
      var temp = {
        time: "",
        title: json["route"][i].bus_stop_name,
        description: "Stop no. " + (i + 1),
      };
      result.push(temp);
    }
    return result;
  }

  getRemoteData = () => {
    // var src_id = this.props.route.params["src_id"];
    // var dest_id = this.props.route.params["dest_id"];
    // console.log(this.props.route.params["source"]);
    var bus_no = this.props.route.params["bus_num"];
    var src_id = 106;
    var dest_id = 336;
    const url = "http://157.245.110.40/getBusRoute.php/?bus_no=" + bus_no;
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        this.setState({
          data: this.generateRequiredFormat(json),
          isLoading: false,
        });
      })
      .catch((error) => {
        console.log("get data error:" + error);
      });
  };

  render() {
    this.getRemoteData();
    console.log(this.state.data);
    return (
      <SafeAreaView style={styles.container}>
        {this.state.isLoading == false ? (
          <Timeline data={this.state.data} />
        ) : null}
      </SafeAreaView>
    );
  }
}

export default BusRouteScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});
