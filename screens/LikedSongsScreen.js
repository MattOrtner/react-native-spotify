import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const LikedSongsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>These are liked songs</Text>
      <Text>These are liked songs</Text>
      <Text>These are liked songs</Text>
    </View>
  );
};

export default LikedSongsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 50,
  },
  background: {
    justifyContent: "center",
    alignItems: "center",
  },
});
