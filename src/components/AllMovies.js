import React, { useEffect } from 'react'
import { View, Text,FlatList, Image, Dimensions, Pressable } from 'react-native'
import { useQuery } from "react-query"
import {popularMovies} from "../data/fetchers"
import {Loading} from "./Loading"
import Constants from "expo-constants"

const {imageUrl} = Constants.manifest.extra;
const {width, height} = Dimensions.get("window")

export const AllMovies = ({navigation}) => {
  const {isLoading, isError, data} = useQuery("movies", popularMovies);

  if (isLoading) return <Loading />

  return (
    <View>
      <FlatList 
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data.data.results}
        keyExactor={item => item.id.toString()}
        renderItem={({item}) => {
          const {id, poster_path, title, vote_average} = item;
          return (
            <View key={id} style={{width: width * 0.4, height: height * 0.3}}>
              <Pressable onPress={() => navigation.navigate("Movie", {
                movieId: id,
                movieTitle: title
              })}>
                <Image style={{width: 200, height: 280}} resizeMode={"contain"} resizeMethod={"auto"} source={{uri: `${imageUrl}${poster_path}`}} />
                <Text style={{fontSize: 30}}>{title}</Text>
                <Text style={{fontSize: 20}}>{vote_average}</Text>
              </Pressable>
            </View>
          )
        }}
      />
    </View>
  )
}
