import * as React from "react";
import { FlatList } from "react-native-gesture-handler";
import ChatListItem from "../components/ChatListItem";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import chatRooms from "../data/ChatRooms";

export default function ChatScreen() {
  return (
    <View>
      <FlatList
        keyExtractor={(item) => item.id}
        data={chatRooms}
        renderItem={({ item }) => <ChatListItem chatRoom={item} />}
      />
    </View>
  );
}
