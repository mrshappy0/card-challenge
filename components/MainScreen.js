import 'react-native-gesture-handler';
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Dimensions } from "react-native";
import { Button } from "react-native-elements";
import { useFonts } from "expo-font";
import Card from "./Card";


const windowHeight = Dimensions.get("window").height;

export default function App() {
  const [loaded, error] = useFonts({
    alfaSlab: require("../assets/fonts/AlfaSlabOne-Regular.ttf"),
    rockWell: require("../assets/fonts/rock.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["transparent", "rgba(0,0,0,0.3)", "rgba(0,0,0,1)"]}
        locations={[0.5, 0.8, 1]}
        style={styles.background}
      />
      <View style={styles.gameStatusView}>
        <Text style={[styles.gameStatusText, { fontSize: 42 }]}>47</Text>
        <Text style={[styles.gameStatusText, { fontSize: 28 }]}>
          Cards Left
        </Text>
      </View>
      <Card />
      <Button
        containerStyle={styles.dealContainer}
        buttonStyle={styles.deal}
        titleStyle={styles.dealText}
        title="DEAL"
      />
      <Button
        containerStyle={styles.resetContainer}
        buttonStyle={styles.reset}
        titleStyle={styles.resetText}
        title="RESET"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgb(10, 134, 62)",
  },
  gameStatusView: {
    backgroundColor: "rgb(0, 0, 0)",
    flexDirection: "column",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderColor: "rgb(125, 227, 22)",
    borderWidth: 2,
    position: "absolute",
    top: "10%",
  },
  gameStatusText: {
    color: "rgb(255,255,255)",
    fontFamily: "rockWell",
    paddingVertical: 5,
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: windowHeight,
  },
  dealContainer: {
    position: "absolute",
    bottom: "15%",
  },
  deal: {
    backgroundColor: "rgb(239, 206, 75)",
    borderRadius: 14,
  },
  dealText: {
    color: "rgb(0, 0, 0)",
    fontFamily: "alfaSlab",
    fontSize: 60,
    paddingHorizontal: 20,
  },
  resetContainer: {
    position: "absolute",
    bottom: "5%",
    alignSelf: "flex-end",
  },
  reset: {
    backgroundColor: "transparent",
    borderRadius: 14,
    borderColor: "rgb(239, 206, 75)",
    borderWidth: 2,
  },
  resetText: {
    color: "rgb(239, 206, 75)",
    fontFamily: "rockWell",
    fontSize: 28,
    paddingHorizontal: 20,
  },
});
