import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { createStackNavigator } from "@react-navigation/stack";
import Modal from "../components/Modal";
import MainStackNav from "./MainStackNav";

const RootStack = createStackNavigator();

export default function Root() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: "transparent" },
          cardOverlayEnabled: true,
          cardStyleInterpolator: ({ current: { progress } }) => ({
            cardStyle: {
              opacity: progress.interpolate({
                inputRange: [0, 0.5, 0.9, 1],
                outputRange: [0, 0.25, 0.7, 1],
              }),
            },
            overlayStyle: {
              opacity: progress.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 0.5],
                extrapolate: "clamp",
              }),
            },
          }),
        }}
        mode="modal"
      >
        <RootStack.Screen name="Main" component={MainStackNav} />
        <RootStack.Screen name="MyModal" component={Modal} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
