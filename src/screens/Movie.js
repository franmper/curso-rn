import React, {useEffect} from "react";
import {View, Text, Image, StyleSheet, ScrollView} from "react-native";
import { useQuery } from "react-query";
import { getMovie } from "../data/fetchers";
import { Loading } from "../components/Loading";
import Constants from "expo-constants";
import { colors, width, height } from "../theme";
import Videos from "../components/Videos"

const { imageUrl } = Constants.manifest.extra;

const Movie = ({route, navigation}) => {
  const {movieId} = route.params

  const { isLoading, isError, data } = useQuery(`${movieId}`, getMovie);

  if (isLoading) return <Loading />;
  const { original_title, backdrop_path, vote_average, release_date, genres, overview, production_countries, production_companies } = data.data;

  return (
    <View style={styles.container}>
      <View>{console.log(data.data)}</View>
      <Image style={styles.image} resizeMethod={"auto"} resizeMode={"contain"} source={{uri: `${imageUrl}${backdrop_path}`}}/>
      <Text>{original_title}</Text>
      <Videos movieId={movieId} />
      <View>
        {genres.map(genre => {
          return <Text key={genre.id.toString()} style={{fontSize: 25}}>{genre.name}</Text>
        })}
      </View>
      <ScrollView style={{width, height: height * 0.2}}>
        {production_companies.map(companie => companie.logo_path && <Image style={{width: 80, height: 40}} resizeMode={"contain"} resizeMethod={"auto"} source={{uri: `${imageUrl}${companie.logo_path}`}}/>)}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1
  },
  image: {
    width,
    height: height * 0.5
  }
})

export default Movie