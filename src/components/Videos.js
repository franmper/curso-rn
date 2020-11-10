import React, {useState} from 'react'
import { View, Text, Pressable, Modal, StyleSheet, useWindowDimensions } from 'react-native'
import { useQuery } from "react-query";
import { getVideos } from "../data/fetchers";
import { Loading } from "../components/Loading";
import Constants from "expo-constants";
import { colors, width, height, currentHeight } from "../theme";
import { WebView } from 'react-native-webview';
import { AntDesign } from "@expo/vector-icons";
import {Video} from "expo-av"

const Videos = ({movieId}) => {
  const measures = useWindowDimensions();
  const [isVisible, setIsVisible] = useState(false)
  const {isLoading, isError, data} = useQuery(`${movieId}/videos`, getVideos)

  if (isLoading) return <Loading />;

  const toggleModal = () => setIsVisible(prevState => !prevState);

  return (
    <>
      {data?.data?.results?.map((video, index) => (
        <>
          <Pressable key={index} style={styles.btn} onPress={toggleModal}>
            <Text style={styles.text}>Trailer {index + 1}{console.log(`https://www.youtube.com/embed/${video.key}`)}</Text>
          </Pressable>
          <Modal style={styles.modal} visible={isVisible} animationType="fade" hardwareAccelerated={true} presentationStyle={"overFullScreen"} transparent={true} >
            <AntDesign style={styles.closeIcon} name="close" size={30} color={colors.pink} onPress={toggleModal} />
            {/*<WebView style={styles.video} source={{uri: `https://www.youtube.com/embed/${video.key}`}}/>*/}
            <Video 
              source={{uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'}}
              rate={1.0}
              volume={1.0}
              isMuted={false}
              resizeMode="contain"
              shouldPlay
              isLooping
              useNativeControls
              style={[styles.video, { width: measures.width, height: measures.height - currentHeight }]}
            />
          </Modal>
        </>
      ))}
    </>
  )
}

export default Videos


const styles = StyleSheet.create({
  btn: {
    alignItems: "center",
    justifyContent: "center",
    width: 100,
    textAlign: "center",
    backgroundColor: colors.pink,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginVertical: 10,
  },
  modal: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.violet,
    flexWrap: "wrap",
  },
  closeIcon: {
    position: "absolute",
    top: 25,
    right: 25,
    zIndex: 100,
    width: 40,
    height: 40,
    backgroundColor: colors.blue,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    textAlignVertical: "center"
  },
  text: {
    color: colors.blue
  },
  video: {
    backgroundColor: colors.blue,
  }
});
