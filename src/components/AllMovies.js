import React from "react";
import { View, Text, FlatList, Image, StyleSheet, Pressable } from "react-native";
import { useQuery } from "react-query";
import { popularMovies } from "../data/fetchers";
import { Loading } from "./Loading";
import Constants from "expo-constants";
import { colors, width, height } from "../theme";

const { imageUrl } = Constants.manifest.extra;

export const AllMovies = ({ navigation }) => {
  const { isLoading, isError, data } = useQuery("movies", popularMovies);

  if (isLoading) return <Loading />;

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={width * 0.5 + 10}
        decelerationRate={"normal"}
        data={data.data.results}
        keyExactor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          const { id, poster_path, title, vote_average } = item;
          return (
            <View key={id.toString()} style={styles.moviesContainer}>
              <Pressable
                onPress={() =>
                  navigation.navigate("Movie", {
                    movieId: id,
                  })
                }
              >
                <Image style={styles.movieImage} resizeMethod={"auto"} resizeMode={"cover"} source={{ uri: `${imageUrl}${poster_path}` }} />
                <View style={styles.textContainer}>
                  <Text style={styles.moviesTitle}>{title}</Text>
                  <Text style={styles.moviesVote}>{vote_average}</Text>
                </View>
              </Pressable>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: height * 0.62,
    backgroundColor: colors.blue,
    alignItems: "center",
  },
  moviesContainer: {
    alignItems: "center",
    width: width * 0.5,
    height: height * 0.5,
    paddingHorizontal: 10,
    marginTop: 10,
    marginHorizontal: 5,
  },
  textContainer: {
    backgroundColor: colors.pink,
    height: 100,
    width: 200,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    fontWeight: "bold"
  },
  moviesTitle: {
    alignSelf: "center",
    textAlign: "center",
    color: colors.blue,
    fontSize: 18,
    textAlignVertical: "center",
    lineHeight: 20,
  },
  moviesVote: {
    alignSelf: "center",
    textAlign: "center",
    color: colors.blue,
    fontSize: 20,
    textAlignVertical: "center",
  },
  movieImage: {
    width: 200,
    height: 280,
  },
});
