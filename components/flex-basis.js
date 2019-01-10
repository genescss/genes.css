function flexBasis(cfg) {

  var size = cfg.options.scales.size;

  return {
    properties: {
      'fx': 'flex-basis'
    },
    values: {
      'co'  : 'content',
      'fill': 'fill',
      'fit' : 'fit-content',
      'max' : 'max-content',
      'min' : 'min-content',
      '0'   : '0',
      '1'   : size[1],
      '2'   : size[2],
      '3'   : size[3],
      '4'   : size[4],
      '5'   : size[5],
      '6'   : size[6],
      '7'   : size[7],
      '8'   : size[8],
      '9'   : size[9]
    },
    pattern: /^(?!0[^0-9.])[0-9.]+(?:cm|mm|in|px|pt|pc|em|ex|ch|rem|vw|vh|vmin|vmax|%)$/
  }

}

module.exports = flexBasis;
