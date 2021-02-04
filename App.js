import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import Main from "./screens/Main";
import loadGlobalProps from "./utils/customText";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { ThemeContextProvider } from "./themeProvider";

const Stack = createStackNavigator();

export default function App() {
  // Load Global Fonts
  const [loaded, error] = useFonts({
    alfaSlab: require("./assets/fonts/AlfaSlabOne-Regular.ttf"),
    rockWell: require("./assets/fonts/rock.ttf"),
  });
  // If fonts aren't loaded force splash screen to continue
  if (!loaded) {
    return <AppLoading />;
  }

  // Run customText to set Global text default
  loadGlobalProps();

  return (
    <ThemeContextProvider>
      <NavigationContainer>
        <StatusBar style="light" />
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Main" component={Main} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeContextProvider>
  );
}
