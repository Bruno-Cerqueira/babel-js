const presets = [
  [
    "@babel/env",
    {
      targets: {
        firefox: "20",
        chrome: "37",
      },
      useBuiltIns: "usage",
      "corejs": { "version": 3, "proposals": true }
    }
  ],
];

module.exports = {presets}