import React from "react";
import { Text, View } from "react-native";
import { withTheme } from "../themeProvider";

const GameStatusBox = ({themes, deck=[]}) => {
  return (
    <View style={themes.gameStatusView}>
      <Text style={[{ ...themes.gameStatusText }, { fontSize: 42 }]}>{deck.length}</Text>
      <Text style={{ ...themes.gameStatusText }}>Cards Left</Text>
    </View>
  );
};

export default withTheme(GameStatusBox);
