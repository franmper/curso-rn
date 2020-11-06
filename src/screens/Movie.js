import React, {useEffect} from "react";
import {View, Text} from "react-native";

const Movie = ({route, navigation}) => {
  const {movieId, movieTitle} = route.params
  
  useEffect(() => {
    console.log(movieTitle)
  }, [])

  return (
    <View>
      <Text>Movie</Text>
    </View>
  )
}

export default Movie