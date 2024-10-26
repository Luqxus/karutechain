import { useNavigation } from "@react-navigation/native";
import {
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

const HeartRate = (props: { height: number; width: number; imageSrc: any }) => {
  const navigation = useNavigation();

  return (
    <View
      style={[{ width: props.width, height: props.height }, styles.container]}
    >
      <TouchableOpacity
        onPress={() => {
          // navigation.navigate("stat_detail");
        }}
      >
        <ImageBackground
          source={props.imageSrc}
          style={styles.imageBackground}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 4,
    borderRadius: 12,
    backgroundColor: "#F5F5F5",
  },
  imageBackground: {
    width: "100%",
    height: "100%",
  },
});

export default HeartRate;
