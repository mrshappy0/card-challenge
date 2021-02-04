// This file helps multiple transformers play nice and was crucial for 
// Expo-fonts and the SVG transformer. Hours of troubleshooting lead me 
// to this solution at https://forums.expo.io/t/unrecognized-font-family-material-community-expo-40/48333/4

var upstreamTransformer = require("metro-react-native-babel-transformer");
var svgTransformer = require("react-native-svg-transformer");

module.exports.transform = function ({ src, filename, options }) {
  if (filename.endsWith(".svg")) {
    return svgTransformer.transform({ src, filename, options });
  } else {
    return upstreamTransformer.transform({ src, filename, options });
  }
};
