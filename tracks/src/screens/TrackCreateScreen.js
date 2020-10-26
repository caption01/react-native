import React, { useContext, useCallback } from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import {
  SafeAreaView,
  NavigationEvents,
  withNavigationFocus,
} from "react-navigation";

import { Context as LocationContext } from "../context/LocationContext";
import useLocation from "../hooks/useLocation";

import Map from "../components/Map";
import TrackForm from "../components/TrackForm";

import "../_mockLocation";

const TrackCreateScreen = ({ isFocused }) => {
  const {
    state: { recording },
    addLocation,
  } = useContext(LocationContext);

  const callback = useCallback(
    (location) => {
      addLocation(location, recording);
    },
    [recording]
  );

  const [err] = useLocation(isFocused || recording, callback);

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      {/* <NavigationEvents onWillBlur={() => {}} /> */}
      <Text h2> Create a Track</Text>
      <Map />
      <TrackForm />

      {err ? <Text>Please enable location</Text> : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);

// other way to track screen is withNavigationFocus
