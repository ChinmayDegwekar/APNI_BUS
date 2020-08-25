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

class ListBusScreen extends Component {
  constructor() {
    super();

    this.state = { data: 1 };
    this.getRemoteData();
  }

  componentDidMount() {
    console.log(this.state.data);
  }

  getRemoteData = () => {
    const url =
      "http://157.245.110.40/getBusFinder.php/?src_id=106&dest_id=336&time=10:35:5";
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        // console.log(res);
        this.setState({
          data: json,
        });
      })
      .catch((error) => {
        console.log("get data error:" + error);
      });
  };
  renderNativeItem = (item) => {
    console.log("render item called");
    return <Item title={item.bus_no} />;
  };

  render() {
    console.log("render called");
    const { data } = this.state;
    // console.log(data);
    // console.log(this.state.data);
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => this.renderNativeItem(item)}
          //   keyExtractor={(item) => item.id}
        />
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
