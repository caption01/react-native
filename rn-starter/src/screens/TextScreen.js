import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const TextScreen = () => {
  const [text, setText] = useState("");

  const onTextChange = (input) => {
    return setText(input);
  };

  return (
    <View>
      <Text style={styles.textStyle}>Entering Text</Text>
      <TextInput
        style={styles.inputStyle}
        autoCapitalize="none"
        autoCorrect={false}
        value={text}
        onChangeText={onTextChange}
        placeholder="type here"
      />
      <Text style={styles.textStyle}>output : {text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    margin: 15,
  },
  inputStyle: {
    margin: 15,
    padding: 15,
    borderColor: "black",
    borderWidth: 1,
    color: "grey",
  },
});

export default TextScreen;
