import React from 'react'
import { View, ActivityIndicator, Dimensions, StyleSheet } from 'react-native'

const {width, height} = Dimensions.get("window")

export const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={"blue"} size={"large"} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
  },
})