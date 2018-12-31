import React, { Component } from "react";
import { Text, View, StyleSheet, Image, ActivityIndicator } from "react-native";
import { Constants } from "expo";

// You can import from local files
import AssetExample from "./components/AssetExample";

// or any pure javascript modules available in npm
import { Card } from "react-native-paper";

export default class App extends Component {
  state = {
    isLoading: false
  };
  render() {
    const { isLoading } = this.state;
    return (
      <View style={styles.container}>
        {isLoading
          ? null
          : <View style={styles.loading}>
              <Text>Get Weather</Text>
            </View>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
    padding: 8
  },
  loading: {
    backgroundColor: "#fdf6aa"
  }
});
