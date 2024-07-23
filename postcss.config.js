const postcssPresetEnv = require("postcss-preset-env");

module.exports = {
  plugins: [
    postcssPresetEnv({
      // https://preset-env.cssdb.org/features/#stage-3
      stage: 3,
      // https://github.com/csstools/postcss-plugins/blob/main/plugin-packs/postcss-preset-env/FEATURES.md
      features: {
        "logical-properties-and-values": false,
        "opacity-percentage": true,
        "text-decoration-shorthand": true,
      },
    }),
  ],
};
