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

class ListBusScreen extends Component {
  constructor() {
    super();

    this.state = {
      data: 1,
      isLoading: true,
    };
  }

  componentDidMount() {
    console.log(this.state.data);
  }

  getRemoteData = () => {
    // var src_id = this.props.route.params["src_id"];
    // var dest_id = this.props.route.params["dest_id"];
    // console.log(this.props.route.params["source"]);
    var src_id = 106;
    var dest_id = 336;
    const url =
      "http://157.245.110.40/getBusFinder.php/?src_id=" +
      src_id +
      "&dest_id=" +
      dest_id +
      "&time=10:35:5";
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
          flex: 1,
          flexDirection: "row",
          marginTop: 5,
          justifyContent: "space-between",
        }}
      >
        <View style={{ flex: 1 }}>
          <Text style={styles.textAdicionais}>{item.bus_no}</Text>
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "flex-end",
            marginRight: 10,
          }}
        >
          <Text style={styles.textAdicionais}>{item.trip.arrival_time}</Text>
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
                    Buses between {this.props.route.params["source"]} and
                    {this.props.route.params["destination"]}
                  </Text>
                </Text>
                <FlatList
                  // data={this.state.data}
                  ItemSeparatorComponent={this.renderSeparator}
                  data={this.state.data["data"]}
                  renderItem={({ item }) => this.renderNativeItem(item)}
                  //   keyExtractor={(item) => item.id}
                />
              </View>
            ) : (
              <View>
                <Text>No buses</Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  title: {
    fontSize: 32,
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
