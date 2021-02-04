import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";
import MainScreen from "./components/MainScreen";
import { useFonts } from "expo-font";
import loadGlobalProps from "./utils/customText";

const Stack = createStackNavigator();

export default function App() {
  const [loaded, error] = useFonts({
    alfaSlab: require("./assets/fonts/AlfaSlabOne-Regular.ttf"),
    rockWell: require("./assets/fonts/rock.ttf"),
  });

  if (!loaded) {
    return null;
  }

  // const customText = {
  //   style: {
  //     fontSize: 76,
  //     fontFamily: "rockWell",
  //     color: "red",
  //   },
  // };

  // loadGlobalProps(customText);

  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={MainScreen} />
        {/* <View style={{ flex: 1 }}>
          <MainScreen />
        </View> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
