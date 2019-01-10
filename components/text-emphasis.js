function textEmphasis(cfg) {

  var colors = cfg.options.colors;

  return {
    properties: {
      'te': 'text-emphasis'
    },
    values: {
      'f'  : 'filled',
      'o'  : 'open',
      'c'  : 'circle',
      'oc' : 'open circle',
      'd'  : 'dot',
      'od' : 'open dot',
      'dc' : 'double-circle',
      'odc': 'open double-circle',
      't'  : 'triangle',
      'ot' : 'open triangle',
      's'  : 'sesame',
      'os' : 'open sesame',
      'no' : 'none',
      ...colors,
      'ol' : 'over left',
      'or' : 'over right',
      'ul' : 'under left',
      'ur' : 'under right'
    }
  }

}

module.exports = textEmphasis;
