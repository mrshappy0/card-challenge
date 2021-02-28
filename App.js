import "react-native-gesture-handler";
import React from "react";
import loadGlobalProps from "./utils/customText";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { ThemeContextProvider } from "./themeProvider";
import Root from "./navigation/RootStack";

export default function App() {
  // Load Global Fonts
  const [loaded, error] = useFonts({
    alfaSlab: require("./assets/fonts/AlfaSlabOne-Regular.ttf"),
    rockWell: require("./assets/fonts/rock.ttf"),
    Courier: require("./assets/fonts/CourierPrime-Bold.ttf"),
  });
  // If fonts aren't loaded force splash screen to continue
  if (!loaded) {
    return <AppLoading />;
  }

  // Run customText to set Global text default
  loadGlobalProps();

  return (
    <ThemeContextProvider>
      <Root />
    </ThemeContextProvider>
  );
}
