import React from "react";
import {
  Provider as PaperProvider,
  BottomNavigation,
  DefaultTheme,
} from "react-native-paper";
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons, MaterialIcons, Entypo, AntDesign, FontAwesome, FontAwesome5 } from '@expo/vector-icons'

import {
  ExploreScreen,
  CameraScreen,
  FavouritesScreen,
  ProfileScreen,
  HomeScreen,
} from "./screens";
// import { TabActions } from "@react-navigation/native";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'white'
  }
}

const Tab = createBottomTabNavigator();

export default function App() {
  /* const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "home", title: "Home", icon: "home" },
    { key: "explore", title: "Explore", icon: "magnify" },
    { key: "posts", title: "Posts", icon: "plus-circle" },
    { key: "favourites", title: "favourites", icon: "heart" },
    { key: "profile", title: "profile", icon: "account-outline" },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeScreen,
    explore: ExploreScreen,
    camera: CameraScreen,
    favourites: FavouritesScreen,
    profile: ProfileScreen,
  }); */

  return (
    <NavigationContainer>
      <PaperProvider theme={theme}>
        <Tab.Navigator
          tabBarOptions={{
            activeTintColor: 'black',
            showLabel: false,
          }}
        >
          <Tab.Screen name="Home" component={HomeScreen} 
            options={{
              tabBarIcon: ({color, size}) => <Entypo name="home" color={color} size={size} />
            }}
          />
          <Tab.Screen name="Explore" component={ExploreScreen} 
            options={{
              tabBarIcon: ({color, size}) => <AntDesign name="search1" size={size} color={color} />
            }}
          />
          <Tab.Screen name="Camera" component={CameraScreen}
            options={{
              tabBarIcon: ({color, size}) => <FontAwesome name="plus-square-o" size={size} color={color} />
            }}
          />
          <Tab.Screen name="Favourites" component={FavouritesScreen} 
            options={{
              tabBarIcon: ({color, size}) => <FontAwesome5 name="heart" size={size} color={color} />
            }}
          />
          <Tab.Screen name="Profile" component={ProfileScreen}
            options={{
              tabBarIcon: ({color, size}) => <FontAwesome5 name="user-alt" size={size} color={color} />
            }}
          />
        </Tab.Navigator>
        {/* <BottomNavigation
          navigationState={{ index, routes }}
          onIndexChange={setIndex}
          renderScene={renderScene}
        /> */}
      </PaperProvider>
    </NavigationContainer>
  );
}
