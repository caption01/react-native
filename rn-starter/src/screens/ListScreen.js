import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    {
      name: "Friend #1",
    },
    {
      name: "Friend #2",
    },
    {
      name: "Friend #3",
    },
    {
      name: "Friend #4",
    },
    {
      name: "Friend #5",
    },
    {
      name: "Friend #6",
    },
    {
      name: "Friend #7",
    },
    {
      name: "Friend #8",
    },
  ];

  return (
    <View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        keyExtractor={(friend) => friend.name}
        data={friends}
        renderItem={({ item, index }) => {
          return <Text style={styles.textStyles}>{item.name}</Text>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyles: {
    marginVertical: 50,
  },
});

export default ListScreen;
