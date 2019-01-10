function textDecoration(cfg) {

  var colors = cfg.options.colors;

  return {
    properties: {
      'td': 'text-decoration'
    },
    values: {
      'u' : 'underline',
      'o' : 'overline',
      'lt': 'line-through',
      'no': 'none',
      ...colors,
      's' : 'solid',
      'ds': 'dashed',
      'dt': 'dotted',
      'db': 'double',
      'w' : 'wavy'
    }
  }

}

module.exports = textDecoration;
