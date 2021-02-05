import "react-native-gesture-handler";
import React, { useReducer } from "react";
import { View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Button } from "react-native-elements";
import Card from "../components/Card";
import { withTheme } from "../themeProvider";
import GameStatusBox from "../subComponents/GameStatusBox";

const deckOfCards = () => {
  let deck = [];
  let suits = ["spades", "diamonds", "clubs", "hearts"];
  let values = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
  ];

  let getDeck = () => {
    for (var i = 0; i < suits.length; i++) {
      for (var x = 0; x < values.length; x++) {
        var card = { Value: values[x], Suit: suits[i] };
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
  return {
    deckOfCards: deck.slice(5, deck.length),
    cardsOnDeck: deck.slice(0, 5),
  };
  // return deck
};

const initialState = deckOfCards();

function reducer(state, action) {
  switch (action.type) {
    case "dealFive":
      if (state.deckOfCards.length === 2) {
        return {
          deckOfCards: [],
          cardsOnDeck: state.deckOfCards.slice(0, 2),
        };
      }
      return {
        deckOfCards: state.deckOfCards.slice(5, state.deckOfCards.length),
        cardsOnDeck: state.deckOfCards.slice(0, 5),
      };
    case "reset":
      return initialState;
    default:
      state;
  }
}

const Main = ({ themes }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <View style={themes.gameContainer}>
      <LinearGradient
        colors={["transparent", "rgba(0,0,0,0.3)", "rgba(0,0,0,1)"]}
        locations={[0.5, 0.8, 1]}
        style={themes.background}
      />
      <GameStatusBox deck={state.deckOfCards} />
      <View style={{ flexDirection: "row" }}>
        {state.cardsOnDeck.map((card, index) => {
          return <Card key={index} card={card} />;
        })}
      </View>
      {state.deckOfCards.length > 0 ? (
        <>
          <Button
            containerStyle={themes.dealContainer}
            buttonStyle={themes.deal}
            titleStyle={themes.dealText}
            title="DEAL"
            disabled={state.deckOfCards.length === 0}
            onPress={() => dispatch({ type: "dealFive" })}
          />
          <Button
            containerStyle={themes.resetContainer}
            buttonStyle={themes.outline}
            titleStyle={themes.outlineText}
            title="RESET"
            disabled={state.deckOfCards.length === 0}
            onPress={() => dispatch({ type: "reset" })}
          />
        </>
      ) : (
        <Button
          title="Play Again?"
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
