import moment from "moment";
import React from "react";
import { View, Text, Image } from "react-native";
import tailwind from "tailwind-rn";
import { ChatRoom } from "../types";

export type ChatListItemProps = {
  chatRoom: ChatRoom;
};

const ChatListItem = (props: ChatListItemProps) => {
  const { chatRoom } = props;
  const user = chatRoom.users[1];
  return (
    <View style={tailwind(`flex-row justify-between p-3`)}>
      <View style={tailwind(`flex-row flex-1`)}>
        <Image
          source={{ uri: user.imageUri }}
          style={{
            width: 50,
            height: 50,
            resizeMode: "cover",
            marginRight: 10,
            borderRadius: 50,
          }}
        />
        <View style={tailwind(`justify-around`)}>
          <Text style={tailwind(`font-bold`)}>{user.name}</Text>
          <Text numberOfLines={1} style={tailwind(`text-gray-600`)}>
            {chatRoom?.lastMessage?.content}
          </Text>
        </View>
      </View>
      <Text style={tailwind(`text-gray-600`)}>
        {moment(chatRoom.lastMessage.createdAt).format("DD/MM/YYYY")}
      </Text>
    </View>
  );
};

export default ChatListItem;
