import "react-native-gesture-handler";
import React from "react";
import { Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Button } from "react-native-elements";
import Card from "../components/Card";
import { withTheme } from "../themeProvider";
import { GameStatusBox } from "../subComponents/GameStatusBox";

const Main = ({ themes }) => {
  return (
    <View style={themes.gameContainer}>
      <LinearGradient
        colors={["transparent", "rgba(0,0,0,0.3)", "rgba(0,0,0,1)"]}
        locations={[0.5, 0.8, 1]}
        style={themes.background}
      />
      <GameStatusBox />
      <Card />
      <Button
        containerStyle={themes.dealContainer}
        buttonStyle={themes.deal}
        titleStyle={themes.dealText}
        title="DEAL"
      />
      <Button
        containerStyle={themes.resetContainer}
        buttonStyle={themes.reset}
        titleStyle={themes.resetText}
        title="RESET"
      />
    </View>
  );
};

export default withTheme(Main);
