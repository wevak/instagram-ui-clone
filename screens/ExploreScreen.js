import * as React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-paper'

export default function ExploreScreen() {
  return (
    <View style={styles.background}>
      <FlatList 
        data={[
          {key: 'First'},
          {key: 'Second'},
          {key: 'Third'},
          {key: 'Fourth'},
          {key: 'Fifth'},
        ]}
        renderItem={item => <Text /* style={styles.item} */>{item.key}</Text>}
      />
      <Button>Button</Button>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    // color: 'cyan'
  },
  background: {
    flex: 1,
    backgroundColor: 'steelblue'
  }
})