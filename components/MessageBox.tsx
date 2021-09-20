import moment from "moment";
import React from "react";
import { View, Text } from "react-native";
import tailwind from "tailwind-rn";
import { Message } from "../types";

export type MessageBoxProps = () => {
  mesaages: Message;
};

const MessageBox = (props: MessageBoxProps) => {
  const { message } = props;
  const isUser = () => {
    return message.user.id === "u1";
  };
  return (
    <View style={tailwind(`m-3`)}>
      {!isUser() && (
        <Text style={tailwind(`font-semibold mb-1 `)}>
          {!isUser() && message.user.name}
        </Text>
      )}
      <View
        style={tailwind(
          `${
            isUser() ? "ml-20 bg-blue-500" : "mr-20 bg-green-600"
          }  px-3 py-2 rounded-xl`
        )}
      >
        <Text style={tailwind(`text-white`)}>{message.content}</Text>
        <Text style={tailwind(`text-gray-200 text-right mt-1 `)}>
          {/* {moment(message.createdAt).format("hh:mm, DD/MM")} */}
          {moment(message.createdAt).fromNow()}
        </Text>
      </View>
    </View>
  );
};

export default MessageBox;
