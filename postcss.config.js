module.exports = {
  plugins: [
    require('autoprefixer'),
    require('cssnano')({
      preset: ['default', {
        discardComments: {
          removeAll: true,
        },
        reduceIdents: false,
        mergeIdents: false,
        mergeRules: true,
        mergeLonghand: true,
        colormin: true,
        minifyFontValues: true,
        minifyParams: true,
        minifySelectors: true,
        normalizeCharset: true,
        normalizeDisplayValues: true,
        normalizePositions: true,
        normalizeRepeatStyle: true,
        normalizeString: true,
        normalizeTimingFunctions: true,
        normalizeUnicode: true,
        normalizeUrl: true,
        normalizeWhitespace: true,
        orderedValues: true,
        reduceTransforms: true,
        svgo: true,
        uniqueSelectors: true,
      }]
    })
  ]
};