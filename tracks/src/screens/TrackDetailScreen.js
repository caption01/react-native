import React, { useContext } from "react";
import { StyleSheet, Text } from "react-native";
import MapView, { Polyline } from "react-native-maps";

import { Context as TrackContext } from "../context/TrackContext";
import TrackListScreen from "./TrackListScreen";

const TrackDetailScreen = ({ navigation }) => {
  const { state } = useContext(TrackContext);
  const _id = navigation.getParam("_id");

  const track = state.find((t) => t._id === _id);
  const initCoords = track.locations[0].coords;

  return (
    <>
      <Text>TrackDetailScreen - {track.name}</Text>
      <MapView
        style={styles.map}
        initialRegion={{
          ...initCoords,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Polyline coordinates={track.locations.map((loc) => loc.coords)} />
      </MapView>
    </>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});
export default TrackDetailScreen;
