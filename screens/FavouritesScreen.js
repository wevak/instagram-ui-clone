import * as React from 'react'
import { Title, ActivityIndicator, Appbar, List, Avatar, Colors } from 'react-native-paper'
import { View, FlatList, Text, StyleSheet } from 'react-native'

export default function FavouriteScreen() {
  const [isLoading, setIsLoading] = React.useState(true)
  const [data, setData] = React.useState([])

  React.useEffect(() => {
    fetch('https://reactnative.dev/movies.json')
      .then(response => response.json())
      .then(json => setData(json.movies))
      .catch(err => console.error(error))
      .finally(() => setIsLoading(false))
  }, [])

  return (
    <>
      <Appbar.Header>
        <Appbar.Content title="Activity" />
      </Appbar.Header>
      <List.Section>
        <List.Subheader>This Week</List.Subheader>
        <List.Item title="Follow Pooja Bhandari, Sonal Singh and others you know to see their photos and videos. 2d" left={() => <Avatar.Image size={50} style={styles.avatarNotification} source={require('../assets/dps/neha_dp_circled.jpg')} />} />
        <List.Item
          title="Follow Indira Sonwane, Shruti and others you know to see their photsos and videos. 3d"
          left={() => <Avatar.Image size={50} style={styles.avatarNotification} source={require('../assets/dps/man_dp_circled.jpg')} />
        } />
        <List.Item
          title="someone.1997, ahiredear and 2 others started following you. 6d"
          left={() => <Avatar.Image size={50} style={styles.avatarNotification} source={require('../assets/dps/woman_winter_dp_circled.jpg')} />
        } />
      </List.Section>
      <View style={{flex: 1, padding: 24}}>
        {isLoading ? <ActivityIndicator color={Colors.red500} /> : (
          <FlatList
            data={data}
            keyExtractor={({id}, index) => id}
            renderItem={({item}) => (
              <Text>{item.title}, {item.releaseYear}</Text>
            )}
          />
        )}
      </View>
    </>
  )
}


const styles = StyleSheet.create({
  appbar: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inline: {
    flexDirection: 'row'
  },
  avatarNotification: {
    margin: 10
  }
});
