import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Main from "../screens/Main";

const MainStack = createStackNavigator();

export default function MainStackNav() {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <MainStack.Screen name="Main" component={Main} />
    </MainStack.Navigator>
  );
}