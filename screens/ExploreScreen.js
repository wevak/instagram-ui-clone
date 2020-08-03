import * as React from 'react'
import { FlatList, StyleSheet, View, Image } from 'react-native'
import { Button, Text } from 'react-native-paper'

export default function ExploreScreen() {
  const [items, setItems] = React.useState({})
  React.useEffect(() => {
    setItems(Array.apply(null, Array(60)).map((v, i) => {
      return { id: i, src: 'http://placehold.it/200x200?text=' + (i + 1) };
    }))
  }, [])

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <View style={{ flex: 1, flexDirection: 'column', margin: 1 }}>
            <Image style={styles.imageThumbnail} source={{ uri: item.src }} />
          </View>
        )}
        //Setting the number of column
        numColumns={3}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 30
  },
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100
  },
})