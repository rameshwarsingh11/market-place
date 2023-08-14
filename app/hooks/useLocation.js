import * as Location from "expo-location";
import { useState, useEffect } from "react";

export default useLocation = () => {
  const [location, setLocation] = useState();
  const getLocation = async () => {
    try {
      const { granted } = await Location.requestBackgroundPermissionsAsync();
      if (!granted) return;
      const {
        coords: { latitude, longitude },
      } = await Location.getLastKnownPositionAsync();
      setLocation({ latitude, longitude });
    } catch (error) {
      console.log("Inside the useLocation hook", error);
    }

    useEffect(() => {
      getLocation();
    }, []);
    return location;
  };
};
