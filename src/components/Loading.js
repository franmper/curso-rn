import React from 'react'
import { View, ActivityIndicator, StyleSheet } from 'react-native'
import { colors, width, height } from "../theme";

export const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={colors.pink} size={"large"} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.blue
  },
})