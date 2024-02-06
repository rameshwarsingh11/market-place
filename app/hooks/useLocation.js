import * as Location from "expo-location";
import { useState, useEffect } from "react";

export default useLocation = () => {
  const [location, setLocation] = useState();
  const getLocation = () => {
    (async () => {
      const { granted } = await Location.requestBackgroundPermissionsAsync();
      if (!granted) return;
      const {
        coords: { latitude, longitude },
      } = await Location.getLastKnownPositionAsync();
      setLocation({ latitude, longitude });
    })().catch(e => { console.error(e) });
    useEffect(() => {
      getLocation();
    }, []);
    return location;
  }
};
