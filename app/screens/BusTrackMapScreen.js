import React from "react";
import MapView, { Marker } from "react-native-maps";

import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Alert,
  Picker,
  TouchableOpacity,
} from "react-native";
import SimpleToast from "react-native-simple-toast";
// import MapViewDirections from "react-native-maps-directions";

const { width, height } = Dimensions.get("window");
const ASPECT_RATIO = width / height;
const LATITUDE = 28.603179;
const LONGITUDE = 77.2011984;
const LATITUDE_DELTA = 0.1722;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

class BusTrackMapScreen extends React.Component {
  constructor() {
    super();

    this.state = {
      data: 1,
      isLoading: true,
      latitude: 28.549766,
      longitude: 77.185222,
      crowd_status: "high",
      img_path: "",
      marker_number: 0,
      update_trip_id: 0,
      update_time: "",
      update_bus_stop_id: 0,
      update_crowd_status: "low",
      pickerValue: "",
    };
  }

  onMapPress = (e) => {
    console.log(e.nativeEvent.coordinate);
    this.setState({
      coordinates: [this.state.coordinates, e.nativeEvent.coordinate],
    });
  };

  addBusNumbers(json, num_list) {
    var new_json = [];
    for (var i = 0; i < json.length; i++) {
      var temp = json[i];
      temp.bus_number = num_list[i];
      new_json.push(temp);
    }
    return new_json;
  }

  componentDidMount() {
    // var trip_id = this.props.route.params["trip_id"];
    var top_three_ids = this.props.route.params["top_three_ids"];

    var ts = this.props.route.params["timestamp"];
    console.log("Mountted" + ts);
    this.setState({
      update_time: ts,
      update_trip_id: top_three_ids[0],
    });
    var top_three_bus_numbers = this.props.route.params[
      "top_three_bus_numbers"
    ];
    // var top_three_bus_numbers = ["108STL", "108STL", "108STL"];
    var trip_id = 100;
    const url =
      "http://157.245.110.40/getTrackInfo.php/?trip_id1=" +
      top_three_ids[0] +
      "&trip_id2=" +
      top_three_ids[1] +
      "&trip_id3=" +
      top_three_ids[2];
    console.log(url);

    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        json = this.addBusNumbers(json, top_three_bus_numbers);
        this.setState({
          data: json,
          isLoading: false,
        });
      })
      .catch((error) => {
        console.log("get data error:" + error);
      });
  }
  // showWelcomeMessage = {} =>{
  //   Alert.alert{'Welcome to Apni Bus Delhi'}
  // }

  generatePicker() {
    return route.map((item) => {
      var name = item.bus_stop_name;
      var id = item.bus_stop_id;
      return (
        <Picker.Item
          label={name}
          value={id}
          onValueChange={(itemValue, itemIndex) => {
            this.state.update_bus_stop_id = itemValue;
          }}
        />
      );
    });
  }

  generateMarker() {
    return this.state.data.map((item) => {
      console.log(item.bus_stop_name);
      var icon;
      if (item.crowd_status == "high")
        icon = require("../assets/crowd_high.png");
      else if (item.crowd_status == "medium")
        icon = require("../assets/crowd_medium.png");
      else icon = require("../assets/crowd_low.png");

      if (item.success == "false") {
        // SimpleToast.show("No tracking information to show at this moment");
        return null;
      } else
        return (
          <Marker
            coordinate={{
              latitude: parseFloat(item.latitude),
              longitude: parseFloat(item.longitude),
            }}
            title={item.bus_number + ": " + item.bus_stop_name}
            image={icon}
          ></Marker>
        );
    });
  }

  updateStatus() {
    this.setState({
      update_time: this.props.route.params["timestamp"],
    });
    const url =
      "http://157.245.110.40/updateBusInfo.php?" +
      "trip_id=" +
      this.state.update_trip_id +
      "&time=" +
      this.state.update_time +
      "&bus_stop_id=" +
      this.state.update_bus_stop_id +
      "&crowd_status=" +
      this.state.update_crowd_status;
    // top_three_ids[2];
    console.log(url);

    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
      })
      .catch((error) => {
        console.log("get data error:" + error);
      });
  }

  render() {
    console.log("is loading" + this.state.isLoading);
    var img_path = "";
    var icon;
    if (this.state.isLoading == false) {
      img_path = "../assets/crowd_" + this.state.crowd_status + ".png";
      if (this.state.crowd_status == "high")
        icon = require("../assets/crowd_high.png");
    }
    return (
      <View style={styles.Container}>
        <View style={styles.mapContainer}>
          <MapView
            style={styles.mapStyle}
            initialRegion={{
              latitude: this.state.latitude,
              longitude: this.state.longitude,
              latitudeDelta: LATITUDE_DELTA,
              longitudeDelta: LONGITUDE_DELTA,
            }}
          >
            {this.state.isLoading == false
              ? //   <Marker
                //     coordinate={{ latitude: 28.549766, longitude: 77.185222 }}
                //     title={"Last seen : " + this.state.data.bus_stop_name}
                //     image={icon}
                //   ></Marker>
                this.generateMarker()
              : null}
            {/* <MapView region={this.props.coordinate} showsUserLocation={true}>
          //My map markers
        </MapView> */}
          </MapView>
        </View>
        <View style={styles.updateContainer}>
          <Text style={styles.text}>
            Enter the bus stop and its crowd status
          </Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={
                (this.state && this.state.update_bus_stop_id) ||
                "select station"
              }
              style={{ height: 50, width: 150 }}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({
                  update_bus_stop_id: itemValue,
                })
              }
            >
              {/* <Picker.Item label="Java" value="java" />
              <Picker.Item label="JavaScript" value="js" /> */}
              {this.generatePicker()}
            </Picker>
            <Picker
              // selectedValue={selectedValue}
              selectedValue={
                (this.state && this.state.update_crowd_status) ||
                "select status"
              }
              style={{ height: 50, width: 150 }}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({
                  update_crowd_status: itemValue,
                })
              }
            >
              <Picker.Item label="low crowd" value="low" />
              <Picker.Item label="medium crowd" value="medium" />
              <Picker.Item label="heavy crowd" value="high" />
            </Picker>
          </View>
          <TouchableOpacity
            style={styles.submitButton}
            onPress={() => {
              SimpleToast.show("Status  Updated");
              this.updateStatus();
            }}
          >
            <Text style={styles.submitButtonText}> Submit </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default BusTrackMapScreen;

const route = [
  { bus_stop_id: "1763", bus_stop_name: "Nehru Vihar" },
  { bus_stop_id: "3094", bus_stop_name: "Nehru Vihar Xing" },
  { bus_stop_id: "2316", bus_stop_name: "Police Station Timarpur" },
  { bus_stop_id: "681", bus_stop_name: "Balak Ram Hospital" },
  { bus_stop_id: "1517", bus_stop_name: "Timarpur" },
  { bus_stop_id: "2028", bus_stop_name: "Banarsi Daas Estate Timarpur" },
];
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  pickerContainer: {
    flexDirection: "row",
  },
  mapContainer: {
    flex: 0.7,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  updateContainer: {
    flex: 0.3,
    // flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  text: {
    color: "#41cdf4",
    fontSize: 16,
    fontWeight: "bold",

    alignSelf: "center",
    // paddingBottom: 23,
  },
  submitButton: {
    backgroundColor: "#7a42f4",
    // padding: 10,
    margin: 15,
    height: 40,
  },
  submitButtonText: {
    color: "white",
  },
});
