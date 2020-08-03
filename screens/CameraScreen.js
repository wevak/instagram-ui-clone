import * as React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import { Button } from 'react-native-paper'
import { Camera } from 'expo-camera'
import { Entypo } from '@expo/vector-icons';

export default function CameraScreen() {
  const [hasPermission, setHasPermission] = React.useState(null)
  const [type, setType] = React.useState(Camera.Constants.Type.back)

  React.useEffect(() => {
    (async () => {
      const {status} = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      <Camera style={{ flex: 1 }} type={type}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            justifyContent: 'flex-end'
          }}>
          <TouchableOpacity
            style={{
              flex: 0.1,
              alignSelf: 'flex-end',
              alignItems: 'center',
              // borderWidth: 5,
              // borderColor: 'white'
            }}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            <Text style={{ fontSize: 18, margin: 10, color: 'white' }}> <Entypo name="select-arrows" size={24} color="white" /> </Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  )
}