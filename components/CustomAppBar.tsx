import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { Appbar, Avatar, Text } from "react-native-paper";

const CustomAppBar = () => {
  return (
    <Appbar.Header style={styles.appBar}>
      <Avatar.Image
        size={48}
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR19aUjtXfsvpsjkBgmusLdnZfYQ1mtiLi_VQ&s",
        }}
      />
      <View style={styles.textContainer}>
        <Text style={styles.greeting}>Good Morning</Text>
        <Appbar.Content title="Reze" titleStyle={styles.title} />
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

const styles = StyleSheet.create({
  appBar: {
    marginTop: 4,
    backgroundColor: "#F5F5F5",
    flexDirection: "row",
    alignItems: "center",
  },
  textContainer: {
    marginTop: 10,
    marginLeft: 16,
    flex: 1,
    justifyContent: "center",
  },
  greeting: {
    fontSize: 12,
    color: "#888",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  actionIcon: {
    borderColor: "white",
    borderWidth: 2,
  },
});

export default CustomAppBar;
