import React from "react";
import { Animated, Text, View } from "react-native";
import { withTheme } from "../themeProvider";
import CardImage from "../subComponents/CardImage";

const Card = ({
  themes,
  card: { Suit, Value },
  c0x,
  c0y,
  c1x,
  c1y,
  c2x,
  c2y,
  c3x,
  c3y,
  c4x,
  c4y,
  index,
  firstHand,
  rotate0,
  rotate1,
  rotate2,
  rotate3,
  rotate4,
}) => {
  let suiteColor = Suit === "hearts" || Suit === "diamonds" ? "red" : "black";

  const spin0 = rotate0.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "20deg"],
  });
  const spin1 = rotate1.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "10deg"],
  });
  const spin2 = rotate2.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "0deg"],
  });
  const spin3 = rotate3.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "-10deg"],
  });
  const spin4 = rotate4.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "-20deg"],
  });

  let trans0 = {};
  let trans1 = {};
  let trans2 = {};
  let trans3 = {};
  let trans4 = {};
  let transDefault = {};

  if (firstHand) {
    switch (index) {
      case 0:
        trans0 = {
          transform: [
            { translateX: 0 },
            { translateY: -10 },
            { rotate: "20deg" },
          ],
        };
        break;
      case 1:
        trans1 = {
          transform: [
            { translateX: 0 },
            { translateY: 10 },
            { rotate: "10deg" },
          ],
        };
        break;
      case 2:
        trans2 = {
          transform: [
            { translateX: 0 },
            { translateY: 20 },
            { rotate: "0deg" },
          ],
        };
        break;
      case 3:
        trans3 = {
          transform: [
            { translateX: 0 },
            { translateY: 10 },
            { rotate: "-10deg" },
          ],
        };
        break;
      case 4:
        trans4 = {
          transform: [
            { translateX: 0 },
            { translateY: -10 },
            { rotate: "-20deg" },
          ],
        };
        break;
      default:
        transDefault = {
          transform: [
            { translateX: 0 },
            { translateY: 0 },
            { rotate: "20deg" },
          ],
        };
        break;
    }
  }

  if (!firstHand) {
    switch (index) {
      case 0:
        trans0 = {
          transform: [
            { translateX: index === 0 ? c0x : 0 },
            { translateY: index === 0 ? c0y : 0 },
            { rotate: spin0 },
          ],
        };
        break;
      case 1:
        trans1 = {
          transform: [
            { translateX: index === 1 ? c1x : 0 },
            { translateY: index === 1 ? c1y : 0 },
            { rotate: spin1 },
          ],
        };
        break;
      case 2:
        trans2 = {
          transform: [
            { translateX: index === 2 ? c2x : 0 },
            { translateY: index === 2 ? c2y : 0 },
            { rotate: spin2 },
          ],
        };
        break;
      case 3:
        trans3 = {
          transform: [
            { translateX: index === 3 ? c3x : 0 },
            { translateY: index === 3 ? c3y : 0 },
            { rotate: spin3 },
          ],
        };
        break;
      case 4:
        trans4 = {
          transform: [
            { translateX: index === 4 ? c4x : 0 },
            { translateY: index === 4 ? c4y : 0 },
            { rotate: spin4 },
          ],
        };
        break;
      default:
        transDefault = {
          transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: spin }],
        };
        break;
    }
  }

  return (
    // <>
    <Animated.View
      style={[
        { ...themes.cardView },
        {
          // ...initialTrans,
          ...trans0,
          ...trans1,
          ...trans2,
          ...trans3,
          ...trans4,
          ...transDefault,
        },
      ]}
    >
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
    </Animated.View>
  );
};

export default withTheme(Card);
