import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { useRoute } from "@react-navigation/native";
import {AntDesign} from "@expo/vector-icons"

const {width, height} = Dimensions.get("window")

const Header = ({ previous, navigation }) => {
  const route = useRoute()
  return (
    <View style={styles.container}>
      {
        previous ? (
          <AntDesign name="left" size={24} color="white" onPress={() => navigation.goBack()}/>
        ) : null
      }
      <Text style={styles.title}>{route.name}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    padding: 50,
    width: width,
    height: height * 0.08,
    paddingHorizontal: width * 0.01,
    backgroundColor: "blue",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 20,
    color: "white",
  }
});
