import { useRoute } from "@react-navigation/native";
import React from "react";
import { View, Text } from "react-native";

const RoomScreen = () => {
  const route = useRoute();
  console.log(route.params);
  return (
    <View>
      <Text>Room Screen</Text>
    </View>
  );
};

export default RoomScreen;
