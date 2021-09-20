/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import {
  FontAwesome,
  Octicons,
  Fontisto,
  MaterialIcons,
  FontAwesome5,
} from "@expo/vector-icons";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ColorSchemeName, View } from "react-native";
import tw from "tailwind-rn";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import ModalScreen from "../screens/ModalScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import TabTwoScreen from "../screens/TabTwoScreen";
import { RootStackParamList, RootTabParamList } from "../types";
import LinkingConfiguration from "./LinkingConfiguration";
import ChatScreen from "../screens/ChatScreen";
import RoomScreen from "../screens/RoomScreen";
import tailwind from "tailwind-rn";
import { useTheme } from "@react-navigation/native";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  const { colors } = useTheme();
  const colorScheme = useColorScheme();

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors[colorScheme].tint,
        },
        headerShadowVisible: false,
        headerTintColor: Colors[colorScheme].text,
        headerTitleAlign: "left",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="Root"
        component={MainTabNavigator}
        options={{
          title: "ChatApp",
          headerRight: () => (
            <View style={tw(`flex flex-row`)}>
              <Octicons
                name="search"
                size={22}
                color={Colors[colorScheme].text}
                style={tw(`mr-6`)}
              />
              <Octicons
                name="kebab-vertical"
                size={22}
                color={Colors[colorScheme].text}
              />
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="RoomScreen"
        component={RoomScreen}
        options={({ route }) => ({
          title: route.params.name,
          headerRight: () => (
            <View style={tailwind(`flex-row justify-between`)}>
              <MaterialIcons name="call" size={22} color={colors.text} />
              <FontAwesome5
                style={tailwind(`ml-5`)}
                name="video"
                size={22}
                color={Colors[colorScheme].text}
              />
              <Octicons
                style={tailwind(`ml-5`)}
                name="kebab-vertical"
                size={22}
                color={Colors[colorScheme].text}
              />
            </View>
          ),
        })}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Nothing" }}
      />
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const MainTab = createMaterialTopTabNavigator<RootTabParamList>();

function MainTabNavigator() {
  const colorScheme = useColorScheme();
  const { colors } = useTheme();
  return (
    <MainTab.Navigator
      initialRouteName="Chats"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].text,
        tabBarStyle: {
          backgroundColor: Colors[colorScheme].tint,
        },
        tabBarIndicatorStyle: {
          backgroundColor: "white",
          height: 3,
        },
        tabBarLabelStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <MainTab.Screen
        name="Camera"
        component={TabTwoScreen}
        options={{
          tabBarIcon: ({ color: String }) => (
            <Fontisto
              name="camera"
              color={Colors[colorScheme].text}
              size={18}
            />
          ),
          tabBarLabel: () => null,
        }}
      />
      <MainTab.Screen
        name="Chats"
        component={ChatScreen}
        options={{
          title: "Chat",
        }}
      />
      <MainTab.Screen
        name="Status"
        component={TabTwoScreen}
        options={{
          title: "Status",
        }}
      />
      <MainTab.Screen
        name="Calls"
        component={TabTwoScreen}
        options={{
          title: "Calls",
        }}
      />
    </MainTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
