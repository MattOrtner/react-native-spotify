import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";

const { _, width } = Dimensions.get("screen");

const CategoryTitle = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default CategoryTitle;

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: width,
    backgroundColor: "black",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    color: "white",
  },
});
