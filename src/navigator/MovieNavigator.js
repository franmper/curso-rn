import React from "react";
import {View, Text} from "react-native";
import {createStackNavigator, TransitionPresets} from "@react-navigation/stack"
import Home from "../screens/Home"
import Movie from "../screens/Movie"
import Header from "../components/Header";

const MovieStack = createStackNavigator();
const MovieNavigatorContainer = MovieStack.Navigator;
const MovieScreen = MovieStack.Screen;

const MovieNavigator = () => {
  return (
    <MovieNavigatorContainer initialRouteName={"Home"} screenOptions={{
      ...TransitionPresets.SlideFromRightIOS
    }}>
      <MovieScreen name="Home" component={Home} options={{
        headerShown: true,
      }}/>
      <MovieScreen name="Movie" component={Movie} options={{
        headerMode: "screen",
        header: ({previous, navigation}) => {
          return (
            <Header previous={previous} navigation={navigation} />
          )
        }
      }}/>
    </MovieNavigatorContainer>
  )
}

export default MovieNavigator