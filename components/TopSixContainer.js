import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import TopSixButton from "./TopSixButton";

const { height, _ } = Dimensions.get("window");

const TopSixContainer = ({ navigate }) => {
  return (
    <View style={styles.container}>
      <View style={styles.column}>
        <TopSixButton navigate={navigate} title="Liked Songs" />
        <TopSixButton navigate={navigate} title="Ballet Pop 1" />
        <TopSixButton navigate={navigate} title="Album" />
      </View>
      <View style={styles.column}>
        <TopSixButton navigate={navigate} title="THis is Deftones" />
        <TopSixButton navigate={navigate} title="Daily Mix 2" />
        <TopSixButton navigate={navigate} title="The School of Greatness " />
      </View>
    </View>
  );
};

export default TopSixContainer;

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: "100%",
    flexDirection: "row",
    paddingBottom: 25,
  },
  column: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: "blue",
  },
});
