import { StyleSheet, Text, View } from "react-native";
import { Ionicons, Entypo } from "@expo/vector-icons";

import React from "react";

const SingleSong = ({ title, artist }) => {
  return (
    <View style={styles.container}>
      <View style={styles.albumCover}></View>
      <View style={styles.detailsContainer}>
        <Text style={styles.artist}>{artist}</Text>
        <Text style={styles.title}>{title}</Text>
      </View>
      <Ionicons name="heart-outline" size={24} color="white" />
      <Entypo name="dots-three-horizontal" size={24} color="white" />
    </View>
  );
};

export default SingleSong;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
    width: "100%",
    backgroundColor: "blue",
  },
  albumCover: {
    backgroundColor: "black",
    height: 30,
    width: 30,
  },
  detailsContainer: {
    justifyContent: "center",
  },
  artist: {
    fontWeight: "bold",
  },
  song: {
    justifyContent: "center",
    alignContent: "center",
    height: 25,
    borderColor: "blue",
    borderWidth: 2,
    width: "100%",
  },
});
