import { useNavigation } from "@react-navigation/native";
import moment from "moment";
import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import tailwind from "tailwind-rn";
import { ChatRoom } from "../types";

export type ChatListItemProps = {
  chatRoom: ChatRoom;
};

const ChatListItem = (props: ChatListItemProps) => {
  const navigation = useNavigation();
  const { chatRoom } = props;
  const user = chatRoom.users[1];

  // navigate to screen has name: RoomScreen and sent param object
  const handleClick = () => {
    navigation.navigate("RoomScreen", { id: chatRoom.id, name: user.name });
  };

  return (
    <TouchableOpacity onPress={handleClick}>
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
    </TouchableOpacity>
  );
};

export default ChatListItem;
