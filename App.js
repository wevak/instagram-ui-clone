import React from "react";
import {
  Provider as PaperProvider,
  BottomNavigation,
  DefaultTheme,
} from "react-native-paper";

import {
  ExploreScreen,
  PostsScreen,
  FavouritesScreen,
  ProfileScreen,
  HomeScreen,
} from "./screens";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'white'
  }
}

export default function App() {
  const [index, setIndex] = React.useState(0);
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
    posts: PostsScreen,
    favourites: FavouritesScreen,
    profile: ProfileScreen,
  });

  return (
    <PaperProvider theme={theme}>
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
    </PaperProvider>
  );
}
