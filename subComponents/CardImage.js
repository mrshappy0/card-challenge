import React from "react";
import { Text } from "react-native";
import Clover from "../assets/Clover.svg";
import Diamond from "../assets/Diamond.svg";
import Heart from "../assets/Heart.svg";
import Spade from "../assets/Spade.svg";



const CardImage = ({Suit}) => {
  // console.log("CardImage",Suit)
  // return (
  //   <Text>hey</Text>
  // )
  switch (Suit) {
    case "hearts":
      return (
        <>
          <Heart
            width={12}
            height={12}
            style={{ alignSelf: "flex-start", marginLeft: 11 }}
          />
          <Heart
            width={22}
            height={22}
            style={{
              alignSelf: "flex-start",
              marginLeft: 23,
              marginBottom: "-10%",
            }}
          />
        </>
      );

    case "diamonds":
      return (
        <>
          <Diamond
            width={12}
            height={12}
            style={{ alignSelf: "flex-start", marginLeft: 11 }}
          />
          <Diamond
            width={22}
            height={22}
            style={{
              alignSelf: "flex-start",
              marginLeft: 23,
              marginBottom: "-10%",
            }}
          />
        </>
      );

    case "spades":
      return (
        <>
          <Spade
            width={12}
            height={12}
            style={{ alignSelf: "flex-start", marginLeft: 11 }}
          />
          <Spade
            width={22}
            height={22}
            style={{
              alignSelf: "flex-start",
              marginLeft: 23,
              marginBottom: "-10%",
            }}
          />
        </>
      );

    case "clubs":
      return (
        <>
          <Clover
            width={12}
            height={12}
            style={{ alignSelf: "flex-start", marginLeft: 11 }}
          />
          <Clover
            width={22}
            height={22}
            style={{
              alignSelf: "flex-start",
              marginLeft: 23,
              marginBottom: "-10%",
            }}
          />
        </>
      );

    default:
      return (<></>);
  }
};

export default CardImage;
