import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import SideScrollItem from "./SideScrollItem";

const LargeAlbumScroll = () => {
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.containerStyle}
      decelerationRate="normal"
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
    backgroundColor: "#fff",
    height: 200,
    left: 0,
  },
});
