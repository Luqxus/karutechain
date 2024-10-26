import React from "react";
import { View, StyleSheet, Dimensions, Text } from "react-native";
import { Card, Chip, Title, useTheme } from "react-native-paper";
import HeartRate from "./HeartRate";

const HealthStatsGridView = () => {
  // Get screen width to make grid responsive
  const screenWidth = Dimensions.get("window").width;
  const cardWidth = (screenWidth - 38) / 2; // 48 = padding (16) * 3
  const theme = useTheme();
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginVertical: 8,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "400" }}>Your condition</Text>
        <Chip
          icon="circle-medium"
          style={{ borderRadius: 30, backgroundColor: theme.colors.secondary }}
          textStyle={{ color: theme.colors.primary }}
          onPress={() => console.log("Pressed")}
        >
          Health
        </Chip>
      </View>

      <View style={styles.row}>
        <HeartRate
          imageSrc={require("../assets/images/kidney.png")}
          width={cardWidth}
          height={200}
        />
        <HeartRate
          imageSrc={require("../assets/images/heart.png")}
          width={cardWidth}
          height={200}
        />
      </View>

      <View style={styles.row}>
        <HeartRate
          imageSrc={require("../assets/images/blood_cell.png")}
          width={cardWidth}
          height={200}
        />
        <HeartRate
          imageSrc={require("../assets/images/brain.png")}
          width={cardWidth}
          height={200}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 4,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  card: {
    height: 200,
    margin: 4,
    elevation: 0,
  },
});

export default HealthStatsGridView;
