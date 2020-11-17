import React from "react";
import { useState } from "react";
import { View, Text, TextInput, StyleSheet, FlatList, Image, Pressable } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { useRef } from "react";
import { searchMovies } from "../data/fetchers";
import { Loading } from "../components/Loading";
import Constants from "expo-constants";
import { colors, width, height } from "../theme";

const { imageUrl } = Constants.manifest.extra;
let currentPage = 1;

const Search = ({navigation}) => {
  const textInputRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  if (isLoading) return <Loading />;

  const handlerSearch = (value) => {
    setSearchTerm(value);
  };

  const handlerPressSearch = async () => {
    console.log("a")
    setIsLoading(prev => !prev)
    const { data } = await searchMovies(searchTerm, currentPage);
    const newData = [...searchResults, ...data.results];
    currentPage++;
    setSearchResults(newData);
    setIsLoading(prev => !prev);
  }

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <TextInput 
          ref={textInputRef}
          style={styles.textInput} 
          placeholder={"Inserte lo que quiere buscar..."} 
          value={searchTerm} onChangeText={(value) => handlerSearch(value)} 
        />
        <AntDesign style={styles.icon} name="search1" size={40} color={colors.blue} onPress={handlerPressSearch} />
      </View>
      <View style={styles.resultsContainer}>
        <FlatList 
          keyExtractor={item => item.id}
          data={searchResults}
          onEndReachedThreshold={0.05}
          onEndReached={handlerPressSearch}
          initialScrollIndex={5}
          ItemSeparatorComponent={() => {
            return (
              <View style={styles.divider}/>
            )
          }}
          renderItem={({item}) => {
            const {id, title, poster_path} = item;
            return (
              <Pressable onPress={() => navigation.navigate("Movie", {
                movieId: id
              })}>
                <View key={id.toString()} style={styles.movieContainer}>
                  <Image style={styles.movieImage} resizeMethod={"auto"} resizeMode={"contain"} source={{uri: `${imageUrl}${poster_path}`}}/>
                  <Text>{title}</Text>
                </View>
              </Pressable>
            )
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blue,
  },
  textInput: {
    width: width * 0.85,
    height: height * 0.07,
    backgroundColor: colors.pink,
    color: colors.blue,
    fontSize: 25,
    paddingHorizontal: 10,
  },
  resultsContainer: {
    flex: 1,
    flexWrap: "wrap",
    width: width * 0.85,
    margin: width * 0.02,
  },
  movieContainer: {
    width,
    flexDirection: "row",
    alignItems: "center",
    height: 70,
    marginVertical: 10,
  },
  movieImage: {
    width: 50,
    height: 70,
  },
  title: {
    marginHorizontal: 15,
    flexWrap: "wrap",
    fontSize: 20,
    color: colors.pink,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: colors.tumbleweed,
  },
  icon: {
    textAlignVertical: "center",
    textAlign: "center",
    backgroundColor: colors.pink,
    width: width * 0.15,
    borderLeftWidth: 1,
    borderLeftColor: colors.blue,
  },
  searchBar: {
    width: width,
    height: height * 0.07,
    justifyContent: "flex-start",
    flexDirection: "row",
  },
});
export default Search;
