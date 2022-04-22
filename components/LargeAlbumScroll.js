import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import ScrollableItem from "./ScrollableItem";

const LargeAlbumScroll = () => {
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.containerStyle}
    >
      <ScrollableItem />
      <ScrollableItem />
      <ScrollableItem />
      <ScrollableItem />
      <ScrollableItem />
      <ScrollableItem />
      <ScrollableItem />
    </ScrollView>
  );
};

export default LargeAlbumScroll;

const styles = StyleSheet.create({
  containerStyle: {
    justifyContent: "center",
    backgroundColor: "#fff",
    alignItems: "center",
  },
});
