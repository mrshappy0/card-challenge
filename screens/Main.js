import "react-native-gesture-handler";
import React, { useReducer, useRef, useState } from "react";
import { Animated, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Button } from "react-native-elements";
import Card from "../components/Card";
import { withTheme } from "../themeProvider";
import GameStatusBox from "../subComponents/GameStatusBox";
import Banner from "../assets/Banner.svg";

//Built Deck and Shuffle.
const deckOfCards = () => {
  let deck = [];
  let suits = ["spades", "diamonds", "clubs", "hearts"];

  // Line below this will ignore
  // prettier-ignore
  let values = ["A","2","3","4","5","6","7","8","9","10","J","Q","K",];

  let getDeck = () => {
    for (let i = 0; i < suits.length; i++) {
      for (let x = 0; x < values.length; x++) {
        let card = { Value: values[x], Suit: suits[i] };
        deck.push(card);
      }
    }
  };

  let ShuffleDeck = () => {
    // for 1000 turns
    // switch the values of two random cards
    for (var i = 0; i < 1000; i++) {
      var location1 = Math.floor(Math.random() * deck.length);
      var location2 = Math.floor(Math.random() * deck.length);
      var tmp = deck[location1];

      deck[location1] = deck[location2];
      deck[location2] = tmp;
    }
  };

  getDeck();
  ShuffleDeck();

  // Return deck with 5 removed, those 5 on deck, and winner status
  return {
    deckOfCards: deck.slice(5, deck.length),
    cardsOnDeck: deck.slice(0, 5),
    winner: false,
    firstHand: true,
  };
};

//Build initial state for reset/replay.
const initialState = deckOfCards();
const resetDeck = () => deckOfCards();

// Reducer for complex state manipulation. Switch for cleaner code.
const reducer = (state, action) => {
  let currentState = state;
  switch (action.type) {
    case "dealFive":
      if (state.deckOfCards.length === 2) {
        return {
          ...currentState,
          firstHand: false,
          deckOfCards: [],
          cardsOnDeck: state.deckOfCards.slice(0, 2),
        };
      }
      return {
        ...currentState,
        firstHand: false,
        deckOfCards: state.deckOfCards.slice(5, state.deckOfCards.length),
        cardsOnDeck: state.deckOfCards.slice(0, 5),
      };
    case "reset":
      return resetDeck();
    case "checkWin":
      return state.deckOfCards.length === 0 &&
        state.cardsOnDeck.filter((card) => card.Value === "A").length > 0
        ? { ...state, winner: true }
        : { ...state, winner: false };
    default:
      state;
  }
};

const Main = ({ themes }) => {
  const [state, dispatch] = useReducer(reducer, initialState, resetDeck);
  const c0y = useRef(new Animated.Value(-580)).current;
  const c0x = useRef(new Animated.Value(100)).current;

  const c1y = useRef(new Animated.Value(-580)).current;
  const c1x = useRef(new Animated.Value(80)).current;

  const c2y = useRef(new Animated.Value(-580)).current;
  const c2x = useRef(new Animated.Value(0)).current;

  const c3y = useRef(new Animated.Value(-580)).current;
  const c3x = useRef(new Animated.Value(-80)).current;

  const c4y = useRef(new Animated.Value(-580)).current;
  const c4x = useRef(new Animated.Value(-100)).current;

  const rotate0 = useRef(new Animated.Value(0)).current;
  const rotate1 = useRef(new Animated.Value(0)).current;
  const rotate2 = useRef(new Animated.Value(0)).current;
  const rotate3 = useRef(new Animated.Value(0)).current;
  const rotate4 = useRef(new Animated.Value(0)).current;

  function moveC0() {
    c0y.setValue(-580);
    c0x.setValue(100);
    rotate0.setValue(0);
    Animated.parallel([
      Animated.timing(rotate0, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(c0y, {
        toValue: -10,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(c0x, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start();
  }
  function moveC1() {
    c1y.setValue(-580);
    c1x.setValue(80);
    rotate1.setValue(0);
    Animated.sequence([
      Animated.delay(300),
      Animated.parallel([
        Animated.timing(rotate1, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(c1y, {
          toValue: 10,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(c1x, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]),
    ]).start();
  }
  function moveC2() {
    c2y.setValue(-580);
    c2x.setValue(0);
    rotate2.setValue(0);
    Animated.sequence([
      Animated.delay(400),
      Animated.parallel([
        Animated.timing(rotate2, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(c2y, {
          toValue: 20,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(c2x, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]),
    ]).start();
  }
  function moveC3() {
    c3y.setValue(-580);
    c3x.setValue(-80);
    rotate3.setValue(0);
    Animated.sequence([
      Animated.delay(500),
      Animated.parallel([
        Animated.timing(rotate3, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(c3y, {
          toValue: 10,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(c3x, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]),
    ]).start();
  }
  function moveC4() {
    c4y.setValue(-580);
    c4x.setValue(-100);
    rotate4.setValue(0);
    Animated.sequence([
      Animated.delay(600),
      Animated.parallel([
        Animated.timing(rotate4, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(c4y, {
          toValue: -10,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(c4x, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]),
    ]).start();
  }

  const deckEmpty = state.deckOfCards.length === 0;
  const winOrLoss = state.winner;
  const deck = state.deckOfCards;
  const dealtCards = state.cardsOnDeck;

  return (
    <View style={themes.gameContainer}>
      <LinearGradient
        colors={["transparent", "rgba(0,0,0,0.3)", "rgba(0,0,0,1)"]}
        locations={[0.5, 0.8, 1]}
        style={themes.background}
      />

      {deckEmpty &&
        (winOrLoss ? (
          <>
            <Text
              style={{
                position: "absolute",
                top: "17.0%",
                zIndex: 3,
                fontSize: 90,
                fontFamily: "Courier",
                fontWeight: "bold",
              }}
            >
              WINNER!
            </Text>
            <Banner
              style={{
                position: "absolute",
                top: "-66.7%",
                right: "-5%",
                zIndex: 2,
              }}
            />
          </>
        ) : (
          <>
            <Text
              style={{
                position: "absolute",
                top: "32%",
                zIndex: 3,
                fontSize: 90,
                fontFamily: "rockWell",
              }}
            >
              "OH NO!"
            </Text>
            <Text
              style={{
                position: "absolute",
                top: "62%",
                zIndex: 3,
                fontSize: 42,
                fontFamily: "rockWell",
              }}
            >
              "Better luck next time."
            </Text>
          </>
        ))}
      <GameStatusBox deck={deck} />
      <View style={{ flexDirection: "row" }}>
        {dealtCards.map((card, index) => {
          return (
            <Card
              key={index}
              card={card}
              c0y={c0y}
              c0x={c0x}
              c1y={c1y}
              c1x={c1x}
              c2y={c2y}
              c2x={c2x}
              c3y={c3y}
              c3x={c3x}
              c4y={c4y}
              c4x={c4x}
              rotate0={rotate0}
              rotate1={rotate1}
              rotate2={rotate2}
              rotate3={rotate3}
              rotate4={rotate4}
              index={index}
              firstHand={state.firstHand}
            />
          );
        })}
      </View>
      {!deckEmpty ? (
        <>
          <Button
            containerStyle={themes.dealContainer}
            buttonStyle={themes.deal}
            titleStyle={themes.dealText}
            title="DEAL"
            disabled={deckEmpty}
            onPress={() => {
              moveC0();
              moveC1();
              moveC2();
              moveC3();
              moveC4();
              dispatch({ type: "dealFive" });
              dispatch({ type: "checkWin" });
            }}
          />
          <Button
            containerStyle={themes.resetContainer}
            buttonStyle={themes.outline}
            titleStyle={themes.outlineText}
            title="RESET"
            disabled={deckEmpty}
            onPress={() => dispatch({ type: "reset" })}
          />
        </>
      ) : (
        <Button
          title="Play Again"
          type="outline"
          containerStyle={themes.againContainer}
          buttonStyle={themes.outline}
          titleStyle={themes.outlineText}
          onPress={() => dispatch({ type: "reset" })}
        />
      )}
    </View>
  );
};

export default withTheme(Main);
