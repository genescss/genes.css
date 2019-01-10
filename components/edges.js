function edges(cfg) {

  var space = cfg.options.scales.space;

  return {
    properties: {
      'te': 'top',
      're': 'right',
      'be': 'bottom',
      'le': 'left'
    },
    values: {
       'a': 'auto',
       '0': '0',
       '1': space[1],
       '2': space[2],
       '3': space[3],
       '4': space[4],
       '5': space[5],
       '6': space[6],
       '7': space[7],
       '8': space[8],
       '9': space[9],
      '-1': `-${space[1]}`,
      '-2': `-${space[2]}`,
      '-3': `-${space[3]}`,
      '-4': `-${space[4]}`,
      '-5': `-${space[5]}`,
      '-6': `-${space[6]}`,
      '-7': `-${space[7]}`,
      '-8': `-${space[8]}`,
      '-9': `-${space[9]}`
    },
    pattern: /^-?(?!0[^0-9.])[0-9.]+(?:cm|mm|in|px|pt|pc|em|ex|ch|rem|vw|vh|vmin|vmax|%)$/
  }

}

module.exports = edges;
