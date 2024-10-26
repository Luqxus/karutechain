import React from "react";
import { BottomNavigation } from "react-native-paper";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Colors } from "@/constants/Colors";

// Import your screens
import HomeScreen from "./index";
import ExploreScreen from "./explore";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const theme = colorScheme ?? "light";

  // Define routes
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
      inactiveColor={Colors[theme].textSecondary}
      barStyle={{
        backgroundColor: Colors[theme].background,
      }}
      labeled={true}
      compact={false}
      shifting={false}
    />
  );
}
