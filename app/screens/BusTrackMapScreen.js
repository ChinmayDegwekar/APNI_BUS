import React from "react";
import MapView, { Marker } from "react-native-maps";

import { StyleSheet, Text, View, Dimensions, Alert } from "react-native";
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
    };
  }

  onMapPress = (e) => {
    console.log(e.nativeEvent.coordinate);
    this.setState({
      coordinates: [this.state.coordinates, e.nativeEvent.coordinate],
    });
  };

  componentDidMount() {
    // var trip_id = this.props.route.params["trip_id"];
    var trip_id = 100;
    const url = "http://157.245.110.40/getTrackInfo.php/?trip_id=" + trip_id;
    console.log(url);

    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
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
      //   <View style={styles.container}>

      <MapView
        style={styles.mapStyle}
        initialRegion={{
          latitude: this.state.latitude,
          longitude: this.state.longitude,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }}
      >
        {this.state.isLoading == false ? (
          <Marker
            coordinate={{ latitude: 28.549766, longitude: 77.185222 }}
            title={"Last seen : " + this.state.data.bus_stop_name}
            image={icon}
          ></Marker>
        ) : null}
        {/* <MapView region={this.props.coordinate} showsUserLocation={true}>
          //My map markers
        </MapView> */}
      </MapView>
      //   </View>
    );
  }
}
export default BusTrackMapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
