import React from "react";
import { View, Image, StyleSheet, ScrollView, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const stories = [
  {
    id: 1,
    uri: "https://images.unsplash.com/photo-1686676831449-3589ad6b10da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1NHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 2,
    uri: "https://images.unsplash.com/photo-1686224569011-3f95e7b66a68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMjd8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 3,
    uri: "https://images.unsplash.com/photo-1686172932727-1762e5b81f5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMDh8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 4,
    uri: "https://images.unsplash.com/photo-1686657429099-71f40e4ade6a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNDd8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 5,
    uri: "https://images.unsplash.com/photo-1686723320460-a87f3f5f0e22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3OHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 6,
    uri: "https://images.unsplash.com/photo-1686594094819-0685648e8925?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3M3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
];

const Story = ({ onPress }) => {
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={styles.container}
    >
      <Pressable style={styles.storyContainer} onPress={onPress}>
        <View style={{ position: "relative" }}>
          <ProfileHead
            key={0}
            uri="https://images.unsplash.com/photo-1559629819-638a8f0a4303?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Ym95fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
          />
          <View
            style={{
              position: "absolute",
              right: 10,
              bottom: 15,
              padding: 1,
              alignItems: "center",
              justifyContent: "center",
              borderWidth: 2,
              borderColor: "#fff",
              backgroundColor: "blue",
              borderRadius: 10,
            }}
          >
            <AntDesign name="plus" size={16} color="#fff" />
          </View>
        </View>
        {stories.map(({ id, uri }) => (
          <ProfileHead key={id} uri={uri} />
        ))}
      </Pressable>
    </ScrollView>
  );
};

const ProfileHead = ({ uri }) => {
  return (
    <View style={styles.storyProfile}>
      <Image source={{ uri }} style={styles.storyProfileImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  storyContainer: {
    flexDirection: "row",
    height: 90,
  },
  storyProfile: {
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
    borderWidth: 2,
    borderColor: "#000",
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  storyProfileImage: {
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
  },
  container: { height: 70 },
});

export default Story;
