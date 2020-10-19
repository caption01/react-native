import React from "react";
import { Text, StyleSheet, Image, View } from "react-native";

const ImageDetail = ({ title, imageSource }) => {
  return (
    <View>
      <Text>Title : {title}</Text>
      <Image source={imageSource} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageDetail;
