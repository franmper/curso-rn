import React from "react";
import {View, Text, Pressable, StyleSheet} from "react-native";
import {AllMovies} from "../components/AllMovies";

const Home = ({navigation}) => {
  return (
    <View>
      <Text>Home</Text>
      <Pressable style={styles.button} onPress={() => navigation.navigate("Movie")}>
        <Text style={{color: "#fff"}}>Ir a movie</Text>
      </Pressable>
      <AllMovies navigation={navigation} />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  button: {
    padding: 30,
    backgroundColor: "red",
  }
})