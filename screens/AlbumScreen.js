import { ScrollView, StyleSheet, Text, View, Pressable } from "react-native";
import React, { useState } from "react";
import { Ionicons, Entypo } from "@expo/vector-icons";
import DUMMY_ALBUM from "../data/Dummy-Album";

const AlbumScreen = () => {
  const [albumTracks, _] = useState(DUMMY_ALBUM.albumTracks);

  return (
    <ScrollView style={styles.screenContainer}>
      <View>
        <View style={styles.albumCoverContainer}>
          <View style={styles.albumCover}></View>
        </View>
        <View style={styles.artistInfoContainer}>
          <Text style={styles.albumTitle}>{DUMMY_ALBUM.albumTitle}</Text>
          <Text style={styles.artistName}>{DUMMY_ALBUM.artist}</Text>
          <Text style={styles.description}>Album - 2017</Text>
        </View>
      </View>
      <View style={styles.compBar}>
        <View style={styles.compBarLeft}>
          <Ionicons name="heart-outline" size={34} color="white" />
          <Ionicons name="arrow-down-circle-outline" size={34} color="white" />
          <Entypo name="dots-three-vertical" size={34} color="white" />
        </View>
        <View style={{ flex: 1 }}></View>
        <View style={styles.compBarRight}>
          <Ionicons name="play-circle-outline" size={64} color="green" />
        </View>
      </View>
      <View style={styles.songListContainer}>
        {albumTracks &&
          albumTracks.map((songData) => (
            <Pressable key={songData.id} style={styles.songBar}>
              <View style={styles.songData}>
                <Text style={styles.songTitle}>{songData.title}</Text>
                <Text style={styles.songArtist}>{DUMMY_ALBUM.artist}</Text>
              </View>
              <View style={styles.songSettingsIcon}>
                <Entypo name="dots-three-vertical" size={24} color="white" />
              </View>
            </Pressable>
          ))}
      </View>
    </ScrollView>
  );
};

export default AlbumScreen;

const styles = StyleSheet.create({
  artistInfoContainer: {
    height: 100,
    justifyContent: "space-around",
    marginLeft: 15,
  },
  songListContainer: {
    flex: 1,
    paddingBottom: 100,
  },
  screenContainer: {
    backgroundColor: "black",
  },
  albumCoverContainer: {
    flex: 1,
    alignItems: "center",
    borderColor: "purple",
    borderWidth: 2,
  },
  songData: {
    flex: 1,
    justifyContent: "flex-start",
    marginLeft: 15,
  },
  songSettingsIcon: {
    justifyContent: "flex-end",
    marginRight: 15,
  },
  albumCover: {
    width: 225,
    height: 225,
    backgroundColor: "blue",
  },
  albumTitle: {
    fontSize: 34,
    fontWeight: "bold",
    color: "white",
  },
  artistName: {
    color: "white",
    fontWeight: "bold",
  },
  description: {
    color: "white",
  },
  compBar: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  compBarLeft: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  compBarRight: {
    alignItems: "flex-end",
    flex: 1,
  },
  songBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: 7,
    height: 40,
  },
  songTitle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  songArtist: {
    fontSize: 12,
    color: "white",
  },
  bottomAlbumData: {
    flexDirection: "row",
  },
});
