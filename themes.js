import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const windowHeight = Dimensions.get("window").height;

const globalStyles = StyleSheet.create({
  // Main Screen
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: windowHeight,
  },
  gameContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgb(10, 134, 62)",
  },

  //Game Status Box
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

  //Deal Button
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

  //Reset Button
  resetContainer: {
    position: "absolute",
    bottom: "5%",
    alignSelf: "flex-end",
  },
  outline: {
    backgroundColor: "transparent",
    borderRadius: 14,
    borderColor: "rgb(239, 206, 75)",
    borderWidth: 2,
  },
  outlineText: {
    color: "rgb(239, 206, 75)",
    fontFamily: "rockWell",
    fontSize: 28,
    paddingHorizontal: 20,
  },
  //Play Again Button
  againContainer: {
    position: "absolute",
    bottom: "20%",
    alignSelf: "center",
  },

  //Card
  cardView: {
    width: 55,
    height: 91,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgb(255, 255, 255)",
    borderRadius: 4,
    flexDirection: "column",
    marginHorizontal: 15,
  },
  cardText: {
    fontSize: 32,
    color: "rgb(0, 0, 0)",
  },

  //Win Banner
  banner: {
    position: "absolute",
    top: "10%",
    zIndex: 2000,
  },

  //Win Message
  winMessage: {
    position: "absolute",
    top: "62%",
    zIndex: 3,
    fontSize: 42,
    fontFamily: "rockWell",
  },

  //Lose Banner
  loseBanner: {
    position: "absolute",
    top: "32%",
    zIndex: 3,
    fontSize: 90,
    fontFamily: "rockWell",
  },
});

export default globalStyles;
