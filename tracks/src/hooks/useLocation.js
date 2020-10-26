import { useEffect, useState } from "react";
import {
  requestPermissionsAsync,
  Accuracy,
  watchPositionAsync,
} from "expo-location";

export default (shouldTrack, callback) => {
  const [err, setErr] = useState(null);
  const [subscriber, setSubcriber] = useState(null);

  const startWatching = async () => {
    try {
      const { granted } = await requestPermissionsAsync();

      if (!granted) {
        throw new Error("Location permission not granted");
      }

      const sub = await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10,
        },
        callback
      );

      setSubcriber(sub);
    } catch (err) {
      setErr(err);
    }
  };

  useEffect(() => {
    if (shouldTrack) {
      startWatching();
    } else {
      //stop watching
      subscriber.remove();
      setSubcriber(null);
    }
  }, [shouldTrack]);

  return [err];
};
