import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { Auth } from "aws-amplify";
import Story from "../../components/Story";
import Feed from '../../components/Feed'
import { colors } from "../../config/Colors";
import Icon from 'react-native-vector-icons/FontAwesome';
import Camera from "../../components/Camera";

const index = () => {
  const signOut = () => {
    Auth.signOut();
  };

  const showModal = () => {
    console.log("show modal");
  };

  return (
    <View style={{ flex: 1 }}>
      <Story onPress={showModal} />
      <ScrollView style={styles.feedContainer}>
        <Camera />
        <Feed />
      </ScrollView>
      <View style={styles.footer}>
        <Icon color={colors.black} size={25} name="home" />
        <Icon color={colors.gray} size={25} name="search" />
        <Icon color={colors.gray} size={25} name="plus-square" />
        <Icon color={colors.gray} size={25} name="heart" />
      </View>
      <Text
        onPress={signOut}
        style={{
          width: "100%",
          textAlign: "center",
          color: "red",
          marginTop: "auto",
          marginVertical: 20,
          fontSize: 20,
        }}
      >
        Sign out
      </Text>
    </View>
  );
};

export default index;

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomColor: colors.gray1,
    borderBottomWidth: 1,
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
    bottom: 0,
    justifyContent: 'space-between',
    padding: 10,
    borderTopColor: colors.gray1,
    borderTopWidth: 1,
  },
  feedContainer: {
    display: 'flex',
  },
  icon: {
    width: 40,
    height: 40,
  },
  logo: {
    width: 150,
    height: '100%',
  },
  headerRightWrapper: {
    display: 'flex',
    flexDirection: 'row',
  },
  storiesWrapper: {
    backgroundColor: colors.gray1,
    borderBottomColor: colors.gray1,
    borderBottomWidth: 1,
  },
});
