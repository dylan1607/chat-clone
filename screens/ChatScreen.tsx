import * as React from "react";
import { FlatList } from "react-native-gesture-handler";
import ChatListItem from "../components/ChatListItem";
import { View } from "../components/Themed";
import chatRooms from "../data/ChatRooms";

export default function ChatScreen() {
  return (
    <View style={{ height: "100%" }}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={chatRooms}
        renderItem={({ item }) => <ChatListItem chatRoom={item} />}
      />
    </View>
  );
}
