import { StyleSheet, ScrollView, StatusBar } from "react-native";
import React from "react";
import TopSixContainer from "../components/TopSixContainer";
import CategoryTitle from "../components/CategoryTitle";
import LargeAlbumScroll from "../components/LargeAlbumScroll";
import HeaderBar from "../components/HeaderBar";

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar />
      <HeaderBar />
      <TopSixContainer navigate={navigation.navigate} />
      <CategoryTitle title={"Your shows"} />
      <LargeAlbumScroll />
      <CategoryTitle title={"Jump back in"} />
      <LargeAlbumScroll />
      <CategoryTitle title={"Recently played"} />
      <LargeAlbumScroll />
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "black",
  },
});
