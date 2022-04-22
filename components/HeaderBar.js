import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const HeaderBar = () => {
  function chooseGreeting() {
    const hours = new Date().getHours();
    if (hours < 12) {
      return "Good morning";
    } else if (hours < 18) {
      return "Good afternoon";
    } else {
      return "Good evening";
    }
  }

  return (
    <View style={styles.headerBar}>
      <Text style={styles.title}>{chooseGreeting()}</Text>
      <View style={styles.iconsContainer}>
        <View style={styles.iconContainer}>
          <Ionicons name="alarm-outline" size={28} color="white" />
        </View>
        <View style={styles.iconContainer}>
          <Ionicons name="timer-outline" size={28} color="white" />
        </View>
        <View style={styles.iconContainer}>
          <Ionicons name="settings-outline" size={28} color="white" />
        </View>
      </View>
    </View>
  );
};

export default HeaderBar;

const styles = StyleSheet.create({
  headerBar: {
    paddingBottom: 25,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "black",
  },
  iconsContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    alignItems: "center",
  },
  iconContainer: {
    paddingRight: 10,
  },
});
