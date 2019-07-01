module.exports = () => ({
  plugins: [
    // require("precss"),
    require("postcss-preset-env")({
      stage: 2,
    }),
    require("postcss-each"),
    require("postcss-import"),
    require("postcss-css-variables"),
    require("postcss-color-function")({ preserveCustomProps: true }),
  ],
})
