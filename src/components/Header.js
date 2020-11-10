import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";
import {AntDesign} from "@expo/vector-icons"
import { colors, width, height } from "../theme";

const Header = ({ previous, navigation }) => {
  const route = useRoute()
  return (
    <View style={styles.container}>
      {
        previous ? (
          <AntDesign backgroundColor="none" name="left" size={30} color={colors.pink}  onPress={() => navigation.goBack()}/>
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
    backgroundColor: colors.blue,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 20,
    color: colors.pink,
  }
});
