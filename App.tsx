import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import constants from "./constants";
import startup from "./startup";

export default function App() {
  startup();
  return <Uhh />;
}

const Uhh = () => {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      ></View>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: constants.mainColor,
    alignItems: "center",
    justifyContent: "center",
  },
});
