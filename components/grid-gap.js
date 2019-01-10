function gridGap(cfg) {

  var space = cfg.options.scales.space;

  var gap = '(?!0[^0-9.])[0-9.]+(?:cm|mm|in|px|pt|pc|em|ex|ch|rem|vw|vh|vmin|vmax|%)';
  var row = `r\\(${gap}\\)`;
  var col = `c\\(${gap}\\)`;

  return {
    properties: {
      'gap': [ 'grid-gap', 'gap' ]
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
    pattern: RegExp(`^${gap}$|^(?:${row})?(?:${col})?$`)

  }

}

module.exports = gridGap;
