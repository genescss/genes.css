function borderRadius(cfg) {

  var border = cfg.options.scales.border;

  return {
    properties: {
      'brs' : 'border-radius',
      'btlr': 'border-top-left-radius',
      'btrr': 'border-top-right-radius',
      'bblr': 'border-bottom-left-radius',
      'bbrr': 'border-bottom-right-radius',
      'bxr' : [ 'border-top-left-radius', 'border-bottom-right-radius' ],
      'byr' : [ 'border-top-right-radius', 'border-bottom-left-radius' ],
      'btr' : [ 'border-top-left-radius', 'border-top-right-radius' ],
      'brr' : [ 'border-top-right-radius', 'border-bottom-right-radius' ],
      'bbr' : [ 'border-bottom-left-radius', 'border-bottom-right-radius' ],
      'blr' : [ 'border-top-left-radius', 'border-bottom-left-radius' ]
    },
    values: {
      'c': '50%',
      'p': '99999px',
      '0': '0',
      '1': border[1],
      '2': border[2],
      '3': border[3],
      '4': border[4],
      '5': border[5],
      '6': border[6]
    },
    pattern: /^(?!0[^0-9.])[0-9.]+(?:cm|mm|in|px|pt|pc|em|ex|ch|rem|vw|vh|vmin|vmax|%)$/
  }

}

module.exports = borderRadius;
