import React from "react";
import { Text, View } from "react-native";
import { withTheme } from "../themeProvider";
import CardImage from "../subComponents/CardImage";

const Card = ({ themes, card: { Suit, Value } }) => {
  let suiteColor = Suit === "hearts" || Suit === "diamonds" ? "red" : "black";
  return (
    <View style={{ ...themes.cardView }}>
      <Text
        style={[
          { ...themes.cardText },
          {
            alignSelf: "flex-start",
            marginLeft: 7,
            marginTop: "-30%",
            marginBottom: 10,
            color: suiteColor,
          },
        ]}
      >
        {Value}
      </Text>
      <View>
        <CardImage Suit={Suit} />
      </View>
    </View>
  );
};

export default withTheme(Card);
