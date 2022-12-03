module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      ["react-native-reanimated/plugin"],
      ["nativewind/babel"],
      [
        "module-resolver",
        {
          alias: {
            "@screens": "./src/screens",
            "@constants": "./src/constants",
            "@components": "./src/components",
            "@navigation": "./src/navigation",
            "@utils": "./src/utils",
            "@assets": "./src/assets",
            "@hooks": "./src/hooks",
            "@themes": "./src/themes",
            "@styles": "./src/styles",
          },
        },
      ],
    ],
  };
};
