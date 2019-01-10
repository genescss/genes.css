function textIndent(cfg) {

  var indent = cfg.options.scales.indent;

  return {
    properties: {
      'ti': 'text-indent'
    },
    values: {
       '0': '0',
       '1': indent[1],
       '2': indent[2],
       '3': indent[3],
       '4': indent[4],
       '5': indent[5],
       '6': indent[6],
       '7': indent[7],
       '8': indent[8],
       '9': indent[9],
      '-1': `-${indent[1]}`,
      '-2': `-${indent[2]}`,
      '-3': `-${indent[3]}`,
      '-4': `-${indent[4]}`,
      '-5': `-${indent[5]}`,
      '-6': `-${indent[6]}`,
      '-7': `-${indent[7]}`,
      '-8': `-${indent[8]}`,
      '-9': `-${indent[9]}`
    },
    pattern: /^-?(?!0[^0-9])[0-9]+(?:cm|mm|in|px|pt|pc|em|ex|ch|rem|vw|vh|vmin|vmax|%)$/
  }

}

module.exports = textIndent;
