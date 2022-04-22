import { StyleSheet, Text, View, Pressable, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import SingleSong from "../components/SingleSong";
import DUMMY_SONGS from "../data/Dummy-Songs";

const LikedSongsScreen = () => {
  return (
    <View style={styles.screenContainer}>
      <View style={styles.topOfScreen}>
        <View styles={styles.topOfScreenLeft}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Liked Songs</Text>
          </View>
          <View style={styles.lengthOfList}>
            <Text>754 songs</Text>
          </View>
          <View style={styles.downloadIcon}>
            <Ionicons name="download-outline" size={34} color="black" />
          </View>
        </View>
        <View style={styles.topOfScreenRight}>
          <View style={styles.rightTop}></View>
          <View style={styles.rightBottom}>
            <Ionicons name="play-circle-outline" size={54} color="black" />
          </View>
        </View>
      </View>
      <FlatList
        data={DUMMY_SONGS}
        style={{ flex: 1 }}
        renderItem={SingleSong}
      />
    </View>
  );
};

export default LikedSongsScreen;

const styles = StyleSheet.create({
  screenContainer: {
    backgroundColor: "purple",
    alignItems: "center",
    flex: 1,
  },
  topOfScreen: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "lightblue",
    height: "20%",
    width: "100%",
  },
  topOfScreenLeft: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
    paddingLeft: 10,
  },
  topOfScreenRight: {
    justifyContent: "center",
  },
  rightTop: {
    flex: 1,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
  },
  songContainer: {
    flex: 1,
    width: "100%",
    borderColor: "red",
    borderWidth: 2,
  },
});
