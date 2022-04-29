import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";

const SideScrollItem = () => {
  function onPressHandler() {}
  return (
    <Pressable style={styles.container} onPress={onPressHandler}>
      <View style={styles.albumCover}></View>
      <View style={styles.detailContainer}>
        <Text style={styles.albumTitle}>Album Name</Text>
        <Text style={styles.artist}>Artist</Text>
      </View>
    </Pressable>
  );
};

export default SideScrollItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    backgroundColor: "#86a68c",
  },
  detailContainer: {
    alignItems: "flex-start",
  },
  albumCover: {
    height: 150,
    width: 150,
    backgroundColor: "#a4c936",
    borderRadius: 20,
  },
  albumTitle: {
    fontWeight: "bold",
    color: "white",
  },
  artist: {
    color: "white",
    opacity: 0.7,
  },
});
