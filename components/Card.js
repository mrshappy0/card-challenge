import React from "react";
import { Text, View } from "react-native";
import { withTheme } from "../themeProvider";
import Clover from "../assets/Clover.svg";

const Card = ({ themes }) => {
  return (
    <View style={themes.cardView}>
      <Text style={{ fontFamily: "rockWell", fontSize: 44 }}>4</Text>
      <Clover width={10} height={10} />
      <Clover width={20} height={20} />
    </View>
  );
};

export default withTheme(Card);
