import React from "react";
import { View, Text } from "react-native";
import { withTheme } from "../themeProvider";
import Banner from "../assets/Banner.svg";

const WinnerBanner = ({ themes }) => {
  return (
  <>
    <Banner />
  </>
  );
};

export default withTheme(WinnerBanner);
