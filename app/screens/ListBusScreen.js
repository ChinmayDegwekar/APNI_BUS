import React, { Component } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

/*
Description : Shows list of buses from source and destination
Input : None
Target Scren : None
*/

class ListBusScreen extends Component {
  constructor() {
    super();

    this.state = {
      data: 1,
      isLoading: true,
      source: "",
      destination: "",
    };
  }

  componentDidMount() {
    console.log(this.state.data);
    this.setState({
      source: this.props.route.params["source"],
      destination: this.props.route.params["destination"],
    });
  }

  getRemoteData = () => {
    var src_id = this.props.route.params["src_id"];
    var dest_id = this.props.route.params["dest_id"];
    var timestamp = this.props.route.params["timestamp"];

    // console.log(this.props.route.params["source"]);
    // var src_id = 1763;
    // var dest_id = 2028;
    const url =
      "http://157.245.110.40/getBusFinder.php/?src_id=" +
      src_id +
      "&dest_id=" +
      dest_id +
      "&time=" +
      timestamp;

    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        // console.log(res);
        this.setState({
          data: json,
          isLoading: false,
        });
      })
      .catch((error) => {
        console.log("get data error:" + error);
      });
  };
  renderNativeItem(item) {
    // console.log("render item called");
    // console.log(item);
    return (
      <View
        style={{
          // flex: 1,
          flexDirection: "row",
          backgroundColor: "#f9c2ff",
          padding: 10,
          marginVertical: 8,
          marginHorizontal: 16,
          // marginTop: 5,
          // height: 50,
          justifyContent: "space-between",
        }}
      >
        <View>
          <Text style={styles.textRow}>{item.bus_no}</Text>
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "flex-end",
            // marginRight: 10,
          }}
        >
          <Text style={styles.textRow}>{item.trip.arrival_time}</Text>
        </View>
      </View>
    );
  }

  render() {
    // console.log("render called");
    this.getRemoteData();
    // const { data } = this.state;
    // console.log(data);
    // console.log(this.state.data);
    // console.log(this.props.route.params);
    return (
      <SafeAreaView style={styles.container}>
        {this.state.isLoading == false ? (
          <View>
            {this.state.data["success"] == true ? (
              <View>
                <Text style={styles.text}>
                  <Text style={styles.capitalLetter}>
                    {" "}
                    Buses between {this.props.route.params["source"]} and{" "}
                    {this.props.route.params["destination"]}
                  </Text>
                </Text>

                <FlatList
                  // data={this.state.data}
                  // ItemSeparatorComponent={this.renderSeparator}
                  style={{ flexGrow: 0, height: 400 }}
                  data={this.state.data["data"]}
                  renderItem={({ item }) => this.renderNativeItem(item)}
                  //   keyExtractor={(item) => item.id}
                />
              </View>
            ) : (
              <View>
                <Text style={styles.no_route_style}>
                  No buses between {this.state.source} and{" "}
                  {this.state.destination}
                </Text>
              </View>
            )}
          </View>
        ) : null}
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          {this.state.isLoading && <ActivityIndicator color={"#fff"} />}
        </View>
      </SafeAreaView>
    );
  }
}
export default ListBusScreen;
//STYLES of containers are defined here
//Convention : Name of style component to be arranged in a sorted order

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "#68b4fc",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  text: {
    color: "#41cdf4",
    fontSize: 24,
    fontWeight: "bold",
    alignSelf: "center",
    paddingBottom: 23,
  },
  textRow: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
    alignSelf: "center",
    paddingBottom: 23,
  },
  title: {
    fontSize: 32,
  },
  no_route_style: {
    color: "#c90000",
    fontSize: 24,
    fontWeight: "bold",
    textShadowRadius: 5,
    alignSelf: "center",
    paddingBottom: 23,
  },
});

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);
const renderItem = ({ item }) => <Item title={item.title} />;

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];
