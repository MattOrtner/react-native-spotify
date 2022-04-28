import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import SideScrollItem from "./SideScrollItem";

const LargeAlbumScroll = () => {
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.containerStyle}
    >
      <SideScrollItem />
      <SideScrollItem />
      <SideScrollItem />
      <SideScrollItem />
      <SideScrollItem />
      <SideScrollItem />
      <SideScrollItem />
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
