import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";

const TopSixButton = ({ navigate, title }) => {
  function onPressHandler() {
    if (title === "Album") {
      navigate("AlbumScreen");
    } else {
      navigate("LikedSongs");
    }
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
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    margin: 2,
    borderRadius: 10,
  },
  contentWrapper: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageHolder: {
    backgroundColor: "black",
    height: "100%",
    marginRight: 5,
    flex: 1,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
  },
  content: {
    flex: 1,
    fontSize: 12,
    color: "white",
  },
});
