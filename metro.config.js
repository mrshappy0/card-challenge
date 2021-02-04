// Required file for custom file extensions. Utilizes the custom transformer.

const { getDefaultConfig } = require("@expo/metro-config");

const defaultConfig = getDefaultConfig(__dirname);

module.exports = (async () => {
  return {
    transformer: {
      babelTransformerPath: require.resolve("./custom-transformer.js"),
    },
    resolver: {
      assetExts: [
        ...defaultConfig.resolver.assetExts.filter((ext) => ext !== "svg"),
      ],
      sourceExts: [...defaultConfig.resolver.sourceExts, "svg"],
    },
  };
})();
