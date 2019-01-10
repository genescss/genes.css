function wordSpacing(cfg) {

  return {
    properties: {
      'ws': 'word-spacing'
    },
    values: {
      'n' : 'normal',
      '0' : '0',
      'w' : '.03em',
      'ew': '.09em',
      'uw': '.3em',
      't' : '-.03em',
      'et': '-.09em'
    },
    pattern: /^-?(?!0[^0-9.])[0-9.]+(?:cm|mm|in|px|pt|pc|em|ex|ch|rem|vw|vh|vmin|vmax|%)$/
  }

}

module.exports = wordSpacing;
