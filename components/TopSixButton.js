import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";

const TopSixButton = ({ navigate, title }) => {
  function onPressHandler() {
    navigate("LikedSongs");
  }

  return (
    <Pressable
      style={({ pressed }) => [styles.container, pressed && styles.pressed]}
      onPress={onPressHandler}
    >
      <View style={styles.contentWrapper}>
        <View style={styles.imageHolder}></View>
        <Text style={styles.content}>{title}</Text>
      </View>
    </Pressable>
  );
};

export default TopSixButton;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.5,
  },
  container: {
    flex: 1,
    textAlign: "center",
    backgroundColor: "blue",
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },
  contentWrapper: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageHolder: {
    backgroundColor: "black",
    width: 75,
    height: 75,
    marginRight: 3,
    borderRadius: 5,
  },
  content: {
    flex: 1,
    color: "white",
  },
});
