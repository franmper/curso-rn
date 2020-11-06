import 'react-native-gesture-handler';
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import MovieNavigator from './src/navigator/MovieNavigator';

export default function App() {

  return (
      <NavigationContainer>
        <MovieNavigator />
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
    flex: 1,
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center"
  },
  btn: {
    marginTop: 20,
    padding: 20,
    width: "80%",
    height: 80,
    backgroundColor: "#000"
  }
});
