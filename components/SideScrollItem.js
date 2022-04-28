import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";

const SideScrollItem = () => {
  function onPressHandler() {}
  return (
    <Pressable style={styles.container} onPress={onPressHandler}>
      <View style={styles.albumCover}></View>
      <View style={styles.detailContainer}>
        <Text style={styles.details}>Album Name</Text>
        <Text style={styles.details}>Artist</Text>
      </View>
    </Pressable>
  );
};

export default SideScrollItem;

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 150,
    borderColor: "white",
    borderWidth: 2,
  },
  detailContainer: {
    alignItems: "flex-start",
  },
  albumCover: {
    height: 100,
    width: 100,
    backgroundColor: "#a4c936",
  },
});
