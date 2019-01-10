function padding(cfg) {

  var space = cfg.options.scales.space;

  return {
    properties: {
      'p' : 'padding',
      'px': [ 'padding-left', 'padding-right' ],
      'py': [ 'padding-top', 'padding-bottom' ],
      'pt': 'padding-top',
      'pr': 'padding-right',
      'pb': 'padding-bottom',
      'pl': 'padding-left'
    },
    values: {
      '0': '0',
      '1': space[1],
      '2': space[2],
      '3': space[3],
      '4': space[4],
      '5': space[5],
      '6': space[6],
      '7': space[7],
      '8': space[8],
      '9': space[9]
    },
    pattern: /^(?!0[^0-9.])[0-9.]+(?:cm|mm|in|px|pt|pc|em|ex|ch|rem|vw|vh|vmin|vmax|%)$/
  }

}

module.exports = padding;
