import React from "react";
import { View, Text, StyleSheet } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.master}>
      <View style={styles.boxOne} />
      <View style={styles.boxTwo} />
      <View style={styles.boxThree} />
    </View>
  );
};

const styles = StyleSheet.create({
  master: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: "black",
    borderWidth: 3,
    height: 300,
  },
  boxOne: {
    height: 100,
    width: 100,
    backgroundColor: "red",
  },
  boxTwo: {
    height: 100,
    width: 100,
    top: 100,
    backgroundColor: "green",
  },
  boxThree: {
    height: 100,
    width: 100,
    backgroundColor: "blue",
  },
});

export default BoxScreen;
