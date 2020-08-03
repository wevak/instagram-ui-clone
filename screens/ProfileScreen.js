import * as React from 'react'
import { View } from 'react-native'
import { Appbar, Button, Text } from 'react-native-paper'
import { Ionicons, Entypo, Feather } from '@expo/vector-icons'

export default function ProfileScreen() {
  return (
    <>
      <Appbar.Header style={{justifyContent: 'space-between'}}>
        <View style={{flexDirection: 'row', margin: 10}}>
          <Text style={{paddingHorizontal: 5}}>username12</Text>
          <Ionicons name="ios-arrow-down" size={18} color="black" />
        </View>
        {/* <Entypo name="menu" size={24} color="black" /> */}
        <Feather name="menu" size={24} color="black" />
      </Appbar.Header>
      <Button>Profile</Button>
    </>
  )
}