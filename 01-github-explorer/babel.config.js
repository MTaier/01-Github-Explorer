module.exports = {
  presets: [
    "@babel/preset-env",
    "@babel/preset-typescript",
    [
      "@babel/preset-react",
      {
        runtime: "automatic", // Ensures React is automatically imported where JSX is used
      },
    ],
  ],
};
