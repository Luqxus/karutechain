import React from "react";
import { BottomNavigation } from "react-native-paper";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Colors } from "@/constants/Colors";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

// Import your screens
import HomeScreen from "./index";
import ExploreScreen from "./explore";

const Tab = createBottomTabNavigator();

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const theme = colorScheme ?? "light";

  // Define your routes
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: "home",
      title: "Home",
      focusedIcon: "home",
      unfocusedIcon: "home-outline",
    },
    {
      key: "explore",
      title: "Explore",
      focusedIcon: "code",
      unfocusedIcon: "code-outline",
    },
  ]);

  // Define your scenes
  const renderScene = BottomNavigation.SceneMap({
    home: HomeScreen,
    explore: ExploreScreen,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      activeColor={Colors[theme].tint}
      theme={{
        colors: {
          secondaryContainer: Colors[theme].background,
        },
      }}
      barStyle={{
        backgroundColor: Colors[theme].background,
      }}
      // You can customize the appearance further with these props
      labeled={true}
      compact={false}
      shifting={false}
    />
  );
}
