import {
  Text,
  View,
  Dimensions,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { Appbar, Avatar } from "react-native-paper";
import AppbarHeader from "react-native-paper/lib/typescript/components/Appbar/AppbarHeader";
import { SafeAreaView } from "react-native-safe-area-context";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const StatDetailScreen = () => {
  return (
    <View style={{ width: width, height: height, backgroundColor: "white" }}>
      <AppBar />
      <ImageCard />
      {/* <Text>dsfdsfdsf</Text> */}
      <StatsListView />
    </View>
  );
};

const AppBar = () => {
  return (
    <Appbar.Header style={styles.appBar}>
      <Appbar.BackAction style={{}} onPress={() => {}} />
      <View style={styles.textContainer}>
        <Appbar.Content title="My Heart" titleStyle={styles.title} />
      </View>
      <Appbar.Action
        icon="bell"
        // color="#0063F9"
        style={styles.actionIcon}
        onPress={() => console.log("Notification pressed")}
      />
    </Appbar.Header>
  );
};

const ImageCard = () => {
  return (
    <View
      style={{
        width: width - 16,
        height: width * 0.9,
        margin: 8,
        backgroundColor: "#F5F5F5",
        borderRadius: 22,
      }}
    >
      <ImageBackground
        source={require("../assets/images/heart.png")}
        resizeMode="contain"
        style={{ width: "100%", height: "100%" }}
      />
    </View>
  );
};

const StatCard = (props: { label: string; stat: string }) => {
  return (
    <View
      style={{
        backgroundColor: "#E9E9E9",
        borderRadius: 15,
        marginVertical: 2,
        marginHorizontal: 10,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          opacity: 0.6,
          padding: 2,
          backgroundColor: "#F5F5F5",
          borderRadius: 15,
        }}
      >
        <View
          style={{
            height: 70,
            width: 70,
            backgroundColor: "white",
            borderRadius: 15,
            marginRight: 12,
          }}
        ></View>
        <View>
          <Text style={{ paddingBottom: 6, fontSize: 16 }}>{props.label}</Text>
          <Text style={{ fontSize: 14 }}>{props.stat}</Text>
        </View>
      </View>
    </View>
  );
};

const StatsListView = () => {
  return (
    <View>
      <StatCard label="Heart Rate" stat={"120 bpm"} />
      <StatCard label="Blood Status" stat={"116/170"} />
      <StatCard label="Blood Count" stat={"80-90"} />
      <StatCard label="Glucose Level" stat={"9 000/ml"} />
    </View>
  );
};

const styles = StyleSheet.create({
  appBar: {
    marginTop: 4,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
  },
  textContainer: {
    marginTop: 20,
    marginLeft: 16,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  greeting: {
    fontSize: 12,
    color: "#888",
  },
  title: {
    // fontSize: 18,
  },
  actionIcon: {
    borderColor: "white",
    borderWidth: 2,
  },
});

export default StatDetailScreen;
