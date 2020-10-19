import React, { useState } from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";

const ColorScreen = () => {
  const [colorList, setColorList] = useState([]);

  return (
    <View>
      <Button
        title="Add a color"
        onPress={() => {
          setColorList([...colorList, randomRga()]);
        }}
      />
      <FlatList
        keyExtractor={(item) => item}
        data={colorList}
        renderItem={({ item, index }) => {
          return (
            <View
              style={{
                height: 100,
                width: 100,
                backgroundColor: item,
              }}
            />
          );
        }}
      />
    </View>
  );
};

const randomRga = () => {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  return `rgb(${red}, ${green}, ${blue})`;
};

const styles = StyleSheet.create({});

export default ColorScreen;
