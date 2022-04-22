import { StyleSheet, Text, View } from "react-native";
import React from "react";

const LibraryScreen = () => {
  return (
    <View style={styles.container}>
      <Text>This is the Library Screen!!!</Text>
    </View>
  );
};

export default LibraryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
