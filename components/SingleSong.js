import { StyleSheet, Text, View, Pressable } from "react-native";
import { Ionicons, Entypo } from "@expo/vector-icons";

import React from "react";

const SingleSong = ({ title, artist }) => {
  return (
    <Pressable style={styles.container}>
      <View style={styles.justify}>
        <View style={[styles.albumCover, styles.justify]}></View>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.artist}>{artist}</Text>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.justify}>
        <Ionicons name="heart" size={24} color="white" />
      </View>
      <View style={styles.justify}>
        <Entypo name="dots-three-horizontal" size={24} color="white" />
      </View>
    </Pressable>
  );
};

export default SingleSong;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    // flex: 1,
    width: "100%",
    height: 55,
    backgroundColor: "blue",
    marginVertical: 2,
    justifyContent: "space-between",
    alignContent: "center",
    padding: 5,
  },
  albumCover: {
    backgroundColor: "black",
    height: 50,
    width: 50,
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
  justify: {
    justifyContent: "center",
  },
});
