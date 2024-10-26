import { StyleSheet, View, Dimensions, Text } from "react-native";

import HealthStatsGridView from "@/components/HealthStatsGridView";
import CustomAppBar from "@/components/CustomAppBar";
import { Button, IconButton, useTheme } from "react-native-paper";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default function HomeScreen() {
  const firstname = "Reze";
  return (
    <View style={styles.mainContainer}>
      <HeaderContainer firstname={firstname} />
      <HealthStatsGridView />
    </View>
  );
}

const HeaderContainer = (props: { firstname: string }) => {
  return (
    <View style={styles.headerContainer}>
      <CustomAppBar />
      <View>
        <Text style={{ fontSize: 26, fontWeight: "400" }}>How Are You</Text>
        <Text style={{ fontSize: 26, fontWeight: "400" }}>Feeling Today?</Text>
      </View>

      <HeaderButton />
    </View>
  );
};

const HeaderButton = () => {
  const theme = useTheme();

  return (
    <View
      style={{ flexDirection: "row", alignItems: "center", marginVertical: 16 }}
    >
      <Button
        icon="camera"
        mode="contained"
        textColor="black"
        style={{
          zIndex: 1,
          backgroundColor: "#F5F5F5",
          borderWidth: 3,
          borderColor: "white",
        }}
        onPress={() => console.log("Pressed")}
      >
        Press me
      </Button>
      <View
        style={{
          zIndex: 0,
          width: 22,
          height: 20,
          borderRadius: 40,
          backgroundColor: "white",
          marginHorizontal: -10, // Adjust to overlap buttons
        }}
      />
      <Button
        icon="camera"
        mode="contained"
        textColor="black"
        style={{
          zIndex: 1,
          backgroundColor: "#F5F5F5",
          borderWidth: 3,
          borderColor: "white",
        }}
        onPress={() => console.log("Pressed")}
      >
        Press me
      </Button>

      <View
        style={{
          borderWidth: 3, // Set the border width
          borderColor: "white", // Use the accent color for the border
          borderRadius: 60, // Round the corners
          // Add padding for spacing
        }}
      >
        <IconButton
          icon="camera"
          containerColor={theme.colors.primary}
          iconColor="white"
          size={20}
          onPress={() => console.log("Pressed")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "#F5F5F5",
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    width: width - 8,
    padding: 8,
    borderRadius: 32,
    margin: 4,
  },
  mainContainer: {
    backgroundColor: "white",
    height: height,
    width: width,
    justifyContent: "center",
    alignItems: "center",
  },
});
