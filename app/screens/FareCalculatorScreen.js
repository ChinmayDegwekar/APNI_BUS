import React, { Component } from "react";
import { BusStopsData, renderBusStopNames } from "../data/bus-stops-data";
import Autocomplete from "react-native-dropdown-autocomplete-textinput";
import Toast from "react-native-simple-toast";
import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ScrollView,
} from "react-native";
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
  Cols,
  Cell,
} from "react-native-table-component";

class FareCalculatorScreen extends Component {
  state = {
    showTable: false,
    isRouteAvailable: false,
    source: null,
    destination: null,
    src_id: "",
    dest_id: "",
    fare_data: null,

    HeadTable: ["Bus Number", "From", "To", "Price(in Rs.)"],
    DataTable: [
      ["1", "2", "3", "4", "5"],
      ["a", "b", "c", "d", "e"],
      ["1", "2", "3", "4", "5"],
      ["a", "b", "c", "d", "e"],
      ["1", "2", "3", "4", "5"],
    ],
  };
  handlesource = (text) => {
    this.setState({ source: text });
  };
  handledestination = (text) => {
    this.setState({ destination: text });
  };
  fareEnquiry = (source, destination) => {
    alert("Source: " + source + " Destination: " + destination);
  };

  json_to_rows_data = (src_id, dest_id, json) => {
    var result_list = [];
    var n = json["result"].length;
    var success = json["success"];
    console.log(success);
    if (success == "false") return null;
    // console.log("called");
    for (var i = 0; i < n; i++) {
      var temp = [];
      var record = json["result"][i];
      temp.push(record.bus_no);
      temp.push(this.state.source);
      temp.push(this.state.destination);

      temp.push(record.fare);
      result_list.push(temp);
    }

    return result_list;
  };

  renderTable = (source, destination) => {
    // First get src and destination ids
    var src_id = this.state.src_id;
    var dest_id = this.state.dest_id;
    var api_request =
      "http://157.245.110.40/fareCalculator.php/?src_id=" +
      src_id +
      "&dest_id=" +
      dest_id +
      "";
    console.log(api_request);
    fetch(api_request)
      .then((res) => res.json())
      .then((json) => {
        // console.log(json);

        //Create table rows as List of lists
        var rows_data = this.json_to_rows_data(src_id, dest_id, json);
        if (rows_data == null) {
          console.log("null");
          // rows_data["result"] = null;
        }
        console.log(rows_data);
        this.setState({
          fare_data: rows_data,
        });
      })
      .catch((error) => {
        console.log("get data error:" + error);
      });
    this.state.showTable = true;
  };

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.container}>
          <Text style={styles.text}>
            <Text style={styles.capitalLetter}> Fare Enquiry</Text>
          </Text>
        </SafeAreaView>
        <Autocomplete
          style={styles.input}
          data={BUS_DATA}
          displayKey="stop_name"
          placeholder={"Source"}
          onSelect={(value) => {
            this.handlesource(value.stop_name);
            this.state.src_id = value.stop_id;
            console.log("value", value);
          }}
          maxHeight={150} //Controls visible options
        />
        <Autocomplete
          style={styles.input}
          data={BUS_DATA}
          displayKey="stop_name"
          placeholder={"Destination"}
          onSelect={(value) => {
            this.handledestination(value.stop_name);
            this.state.dest_id = value.stop_id;
            console.log("value", value);
          }}
          maxHeight={150}
        />
        {/* <TextInput
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
        /> */}
        <TouchableOpacity
          style={styles.submitButton}
          onPress={
            () => {
              if (this.state.source == null || this.state.destination == null)
                Toast.show("Please select source and destination", Toast.LONG);
              else if (this.state.source == this.state.destination)
                Toast.show("Source and destination is same ", Toast.LONG);
              else this.renderTable(this.state.source, this.state.destination);
            }
            // this.fareEnquiry(this.state.source, this.state.destination)
          }
        >
          <Text style={styles.submitButtonText}> Calculate </Text>
        </TouchableOpacity>

        {this.state.showTable && this.state.fare_data != null ? (
          <View>
            <Table borderStyle={{ borderWidth: 1, borderColor: "#ffa1d2" }}>
              <Row
                data={this.state.HeadTable}
                style={styles.HeadStyle}
                textStyle={styles.TableText}
              />
            </Table>
            <ScrollView style={styles.table}>
              <Table borderStyle={{ borderWidth: 1, borderColor: "#ffa1d2" }}>
                <Rows
                  data={this.state.fare_data}
                  textStyle={styles.TableText}
                />
              </Table>
            </ScrollView>
          </View>
        ) : null}

        {this.state.showTable && this.state.fare_data == null ? (
          <View>
            <Text style={styles.no_route_style}>
              No route between {this.state.source} and {this.state.destination}
            </Text>
          </View>
        ) : null}
      </View>
    );
  }
}
export default FareCalculatorScreen;

const BUS_DATA = BusStopsData();
const styles = StyleSheet.create({
  container: {
    paddingTop: 5,
  },
  table: {
    height: 200,
    borderColor: "#ffa1d2",
    borderWidth: 3,
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
  no_route_style: {
    color: "#c90000",
    fontSize: 24,
    fontWeight: "bold",
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
  HeadStyle: {
    height: 50,
    alignContent: "center",
    backgroundColor: "#ffe0f0",
  },
  TableText: {
    margin: 10,
  },
});
