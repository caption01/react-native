import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.background}>
      <AntDesign name="search1" color="black" style={styles.icon} />
      <TextInput
        placeholder="search"
        value={term}
        style={styles.input}
        autoCorrect={false}
        autoCapitalize="none"
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#f0eeee",
    height: 50,
    borderRadius: 50,
    marginHorizontal: 15,
    marginVertical: 15,
    flexDirection: "row",
    //dont set alignItem 'center' in parent because in compress input text height
  },
  icon: {
    fontSize: 32,
    alignSelf: "center",
    marginHorizontal: 15,
  },
  input: {
    //fix first chareacter cut off by increate area with flex 1
    flex: 1,
    fontSize: 18,
  },
});

export default SearchBar;
