import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { AllMovies } from "../components/AllMovies";
import { colors, width, height, currentHeight } from "../theme";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Movie App</Text>
        <AntDesign style={{textAlign: "center", marginLeft: 20}} name="search1" size={40} color={colors.pink} onPress={() => navigation.navigate("Search")} />
      </View>
      <AllMovies navigation={navigation} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    paddingTop: currentHeight,
    flex: 1,
    backgroundColor: colors.blue,
    alignItems: "center",
  },
  titleContainer: {
    height: height * 0.1,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row"
  },
  title: {
    textAlign: "center",
    color: colors.pink,
    fontSize: 50,
    marginLeft: 10
  },
});
