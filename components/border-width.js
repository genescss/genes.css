function borderWidth(cfg) {

  var border = cfg.options.scales.border;

  return {
    properties: {
      'b' : 'border-width',
      'bx': [ 'border-left-width', 'border-right-width' ],
      'by': [ 'border-top-width', 'border-bottom-width' ],
      'bt': 'border-top-width',
      'br': 'border-right-width',
      'bb': 'border-bottom-width',
      'bl': 'border-left-width'
    },
    values: {
      '0': '0',
      '1': border[1],
      '2': border[2],
      '3': border[3],
      '4': border[4],
      '5': border[5],
      '6': border[6],
      '7': border[7],
      '8': border[8],
      '9': border[9]
    },
    pattern: /^(?!0[^0-9.])[0-9.]+(?:cm|mm|in|px|pt|pc|em|ex|ch|rem|vw|vh|vmin|vmax|%)$/
  }

}

module.exports = borderWidth;
