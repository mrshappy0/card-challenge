import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { withTheme } from "../themeProvider";

function LinearGrad({ themes }) {
  return (
    <LinearGradient
      colors={["transparent", "rgba(0,0,0,0.3)", "rgba(0,0,0,1)"]}
      locations={[0.5, 0.8, 1]}
      style={themes.background}
    />
  );
}

export default withTheme(LinearGrad);
