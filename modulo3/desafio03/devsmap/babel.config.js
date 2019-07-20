module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'babel-plugin-root-import',
      {
        pathSuffix: '~',
      },
    ],
  ],
  env: {
    production: {
      plugins: [
        [
          'babel-plugin-root-import',
          {
            pathSuffix: '~',
          },
        ],
      ],
    },
  },
};
