function lineHeight(cfg) {

  return {
    properties: {
      'lh': 'line-height'
    },
    values: {
      'n': 'normal',
      '0': '0',
      't': '1',
      'd': '1.2',
      'p': '1.5'
    },
    pattern: /^(?!0$)(?!0[^0-9.])[0-9.]+(?:cm|mm|in|px|pt|pc|em|ex|ch|rem|vw|vh|vmin|vmax|%)?$/
  }

}

module.exports = lineHeight;
