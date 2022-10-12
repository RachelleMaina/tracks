import React, { useContext, useState } from "react";
import { StyleSheet } from "react-native";
import {  Input, Button } from "react-native-elements";
import Spacer from "./Spacer";
import { Context as LocationContext } from "../context/LocationContext";
import useSaveTrack from "../hooks/useSaveTrack";

const TrackForm = () => {
  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName,
  } = useContext(LocationContext);

const [saveTrack] = useSaveTrack()

  return (
    <>
      <Input
        value={name}
        onChangeText={changeName}
        autoCorrect={false}
        placeholder="Enter name"
      />

   
      <Spacer>
        {recording ? (
          <Button title="Stop" onPress={stopRecording} />
        ) : (
          <Button title="Start Recording" onPress={startRecording} />
        )}
      </Spacer>

     
        {!recording && locations.length ? (
           <Spacer>
          <Button title="Save Recording" onPress={saveTrack} />
          </Spacer>
        ) : (
        null
        )}
   
    </>
  );
};

const styles = StyleSheet.create({
  errorMessage: {
    fontSize: 16,
    color: "red",
    marginLeft: 15,
    marginTop: 15,
  },
});
export default TrackForm;
