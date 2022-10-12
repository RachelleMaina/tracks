import React, { useCallback, useContext } from "react";
import { Text, StyleSheet } from "react-native";
import { SafeAreaView, withNavigationFocus } from "react-navigation";
import Map from "../components/Map";
import TrackForm from "../components/TrackForm";
import { Context as LocationContext } from "../context/LocationContext";
import useLocation from "../hooks/useLocation";
import "../_mockLocation";
import {FontAwesome} from "@expo/vector-icons"

const TrackCreateScreen = ({isFocused}) => {
  const { addLocation, state:{recording} } = useContext(LocationContext);

  const callback = useCallback(location=>{
    addLocation(location, recording)
  }, [recording])

  const [err] = useLocation(isFocused ||
    recording, callback);

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text style={{ fontSize: 48 }}>Create a Track</Text>
      <Map />
      {err ? <Text>Please enable location services</Text> : null}
      <TrackForm/>
    </SafeAreaView>
  );
};
TrackCreateScreen.navigationOptions={title:"Add Track", tabBarIcon:<FontAwesome name="plus" size={25}/> }
const styles = StyleSheet.create({});
export default withNavigationFocus(TrackCreateScreen);
