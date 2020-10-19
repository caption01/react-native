import React from "react";
import { View, Button, StyleSheet, Text } from "react-native";

const ColorCounter = ({ color, onIncrease, onDecrease }) => {
  return (
    <View>
      <Text style={styles.textStyle}>{color}</Text>
      <Button title={`Increase ${color}`} onPress={onIncrease} />
      <Button title={`Decrease ${color}`} onPress={onDecrease} />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    textAlign: "center",
    textTransform: "uppercase",
  },
});

export default ColorCounter;
