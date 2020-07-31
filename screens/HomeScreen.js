import * as React from "react";
import { StyleSheet, ScrollView, View, Text, RefreshControl } from "react-native";
import {
  Appbar,
  Avatar,
  Button,
  Title,
  Caption,
  Subheading,
  Paragraph,
  Card,
  IconButton,
  Colors,
} from "react-native-paper";

// const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
const LeftContent = (props) => (
  <Avatar.Image
    style={styles.avatar}
    size={42}
    source={require("../assets/icons/avatar-beard.png")}
  />
);

const wait = (timeout) => {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}

export default function HomeScreen() {
  const performAction = () => console.log("Action Performed!");
  const [refreshing, setRefreshing] = React.useState(false);

  const handleRefresh = React.useCallback(() => {
    setRefreshing(true);

    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
    <>
      <Appbar.Header style={styles.appbar}>
        <Appbar.Content title="Instagram" />
        <Appbar.Action icon="camera-outline" onPress={performAction} />
        <Appbar.Action icon="telegram" onPress={performAction} />
      </Appbar.Header>
      <ScrollView
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />}
      >
        <ScrollView horizontal={true}>
          <Avatar.Image size={60} style={styles.avatarNotification} source={require('../assets/dps/neha_dp_circled.jpg')} />
          <Avatar.Image size={60} style={styles.avatarNotification} source={require('../assets/dps/man_dp_circled.jpg')} />
          <Avatar.Image size={60} style={styles.avatarNotification} source={require('../assets/dps/poi_dp_circled.jpg')} />
          <Avatar.Image size={60} style={styles.avatarNotification} source={require('../assets/dps/woman_winter_dp_circled.jpg')} />
          <Avatar.Image size={60} style={styles.avatarNotification} source={require('../assets/dps/neha_dp_circled.jpg')} />
          <Avatar.Image size={60} style={styles.avatarNotification} source={require('../assets/dps/man_dp_circled.jpg')} />
          <Avatar.Image size={60} style={styles.avatarNotification} source={require('../assets/dps/poi_dp_circled.jpg')} />
          <Avatar.Image size={60} style={styles.avatarNotification} source={require('../assets/dps/woman_winter_dp_circled.jpg')} />
        </ScrollView>
        <Card>
          <Card.Title
            title="Card Title"
            subtitle="Card Subtitle"
            subtitleStyle={{ fontSize: 13 }}
            left={() => <Avatar.Image
              style={styles.avatar}
              size={42}
              source={require("../assets/dps/poi_dp_circled.jpg")}
            />}
          />
          <Card.Cover source={{ uri: "https://i.picsum.photos/id/1074/5472/3648.jpg?hmac=w-Fbv9bl0KpEUgZugbsiGk3Y2-LGAuiLZOYsRk0zo4A" }} />
          <Card.Actions>
            <View style={styles.inline}>
              <IconButton
                icon="heart"
                size={22}
                color={Colors.red500}
                onPress={performAction}
              />
              <IconButton
                icon="chat-outline"
                size={22}
                onPress={performAction}
              />
              <IconButton
                icon="telegram"
                size={22}
                onPress={performAction}
              />
              <IconButton
                icon="bookmark-outline"
                size={22}
                onPress={performAction}
                style={styles.bookmarkSelfAlignEnd}
              />
            </View>
          </Card.Actions>
        </Card>
        <Card>
          <Card.Title
            title="Card Title"
            subtitle="Card Subtitle"
            subtitleStyle={{ fontSize: 13 }}
            left={() => <Avatar.Image
              style={styles.avatar}
              size={42}
              source={require("../assets/dps/man_dp_circled.jpg")}
            />}
          />
          <Card.Cover source={{ uri: "https://i.picsum.photos/id/128/3823/2549.jpg?hmac=VbPyA2vESva2YdoXqll9REBcbQIskgv_c-D60C1s0xc" }} />
          <Card.Actions>
            <View style={styles.inline}>
              <IconButton
                icon="heart"
                size={22}
                color={Colors.red500}
                onPress={performAction}
              />
              <IconButton
                icon="chat-outline"
                size={22}
                onPress={performAction}
              />
              <IconButton
                icon="telegram"
                size={22}
                onPress={performAction}
              />
              <IconButton
                icon="bookmark-outline"
                size={22}
                onPress={performAction}
                style={styles.bookmarkSelfAlignEnd}
              />
            </View>
          </Card.Actions>
        </Card>
        <Card>
          <Card.Title
            title="Card Title"
            subtitle="Card Subtitle"
            subtitleStyle={{ fontSize: 13 }}
            left={() => <Avatar.Image
              style={styles.avatar}
              size={42}
              source={require("../assets/dps/neha_dp_circled.jpg")}
            />}
          />
          <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
          <Card.Actions>
            <View style={styles.inline}>
              <IconButton
                icon="heart"
                size={22}
                color={Colors.red500}
                onPress={performAction}
              />
              <IconButton
                icon="chat-outline"
                size={22}
                onPress={performAction}
              />
              <IconButton
                icon="telegram"
                size={22}
                onPress={performAction}
              />
              <IconButton
                icon="bookmark-outline"
                size={22}
                onPress={performAction}
                style={styles.bookmarkSelfAlignEnd}
              />
            </View>
          </Card.Actions>
        </Card>
        <Card>
          <Card.Title
            title="Card Title"
            subtitle="Card Subtitle"
            titleStyle={{fontSize: 16}}
            subtitleStyle={{ fontSize: 13 }}
            left={() => <Avatar.Image
              style={styles.avatar}
              size={42}
              source={require("../assets/dps/woman_winter_dp_circled.jpg")}
            />}
          />
          <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
          <Card.Actions>
            <View style={styles.inline}>
              <IconButton
                icon="heart"
                size={22}
                color={Colors.red500}
                onPress={performAction}
              />
              <IconButton
                icon="chat-outline"
                size={22}
                onPress={performAction}
              />
              <IconButton
                icon="telegram"
                size={22}
                onPress={performAction}
              />
              <IconButton
                icon="bookmark-outline"
                size={22}
                onPress={performAction}
                style={styles.bookmarkSelfAlignEnd}
              />
            </View>
          </Card.Actions>
        </Card>
      </ScrollView>
    </>
  );
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
