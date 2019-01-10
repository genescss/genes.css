function verticalAlign(cfg) {

  return {
    properties: {
      'va': 'vertical-align'
    },
    values: {
      'bl' : 'baseline',
      'sub': 'sub',
      'sup': 'super',
      't'  : 'top',
      'tt' : 'text-top',
      'm'  : 'middle',
      'b'  : 'bottom',
      'tb' : 'text-bottom',
      '0'  : '0'
    },
    pattern: /^-?(?!0[^0-9.])[0-9.]+(?:cm|mm|in|px|pt|pc|em|ex|ch|rem|vw|vh|vmin|vmax|%)$/
  }

}

module.exports = verticalAlign;
