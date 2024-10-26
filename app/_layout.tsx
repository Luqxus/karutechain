import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import {
  MD3LightTheme as PaperLightTheme,
  MD3DarkTheme as PaperDarkTheme,
  PaperProvider,
} from "react-native-paper";

import { createStackNavigator } from "@react-navigation/stack";
import TabLayout from "./(tabs)/_layout";
import StatDetailScreen from "./stat_details";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  // Define light and dark themes
  const lightTheme = {
    ...NavigationDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      primary: "#0063F9",
      secondary: "#E4ECF9",
    },
  };

  const darkTheme = {
    ...NavigationDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      primary: "#0063F9",
      secondary: "#E4ECF9",
    },
  };

  const paperLightTheme = {
    ...PaperLightTheme,
    colors: {
      ...PaperLightTheme.colors,
      primary: "#0063F9",
      secondary: "#E4ECF9",
    },
  };

  const paperDarkTheme = {
    ...PaperDarkTheme,
    colors: {
      ...PaperDarkTheme.colors,
      primary: "#0063F9",
      secondary: "#E4ECF9",
    },
  };

  const Stack = createStackNavigator();

  return (
    <ThemeProvider value={colorScheme === "dark" ? darkTheme : lightTheme}>
      <PaperProvider
        theme={colorScheme === "dark" ? paperDarkTheme : paperLightTheme}
      >
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name="(tabs)"
            options={{ headerShown: false }}
            component={TabLayout}
          />
          <Stack.Screen name="stat_details" component={StatDetailScreen} />
        </Stack.Navigator>
      </PaperProvider>
    </ThemeProvider>
  );
}
