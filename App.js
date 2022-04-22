import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "./screens/HomeScreen";
import SearchScreen from "./screens/SearchScreen";
import LibraryScreen from "./screens/LibraryScreen";
import LikedSongsScreen from "./screens/LikedSongsScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  function HomeStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Tabs"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="LikedSongs" component={LikedSongsScreen} />
      </Stack.Navigator>
    );
  }
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#f277c5" },
          tabBarStyle: {
            position: "absolute",
          },
          tabBarActiveBackgroundColor: "#BCCBCD",
          tabBarInactiveBackgroundColor: "grey",
          tabBarIcon: { color: "white" },
          headerShown: false,
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{
            tabBarIcon: ({ tintColor }) => (
              <Ionicons color={tintColor} name="home" size={24} />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            tabBarIcon: ({ tintColor }) => (
              <Ionicons name="search" color={tintColor} size={24} />
            ),
          }}
        />
        <Tab.Screen
          name="YourLibrary"
          component={LibraryScreen}
          options={{
            tabBarIcon: ({ tintColor }) => (
              <Ionicons color={tintColor} name="logo-octocat" size={24} />
            ),
            title: "Your Library",
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
