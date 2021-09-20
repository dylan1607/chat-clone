import { useRoute } from "@react-navigation/native";
import React from "react";
import { View, FlatList, ImageBackground } from "react-native";
import InputBox from "../components/InputBox";
import MessageBox from "../components/MessageBox";
import chatRoomData from "../data/Chats";

const RoomScreen = () => {
  const route = useRoute();
  const image = {
    uri: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=655&q=80",
  };
  console.log(route.params);
  return (
    <ImageBackground style={{ height: "100%", width: "100%" }} source={image}>
      <View>
        <FlatList
          data={chatRoomData.messages}
          renderItem={({ item }) => <MessageBox message={item} />}
        />
        <InputBox />
      </View>
    </ImageBackground>
  );
};

export default RoomScreen;
