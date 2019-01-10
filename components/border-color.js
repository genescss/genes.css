function borderColor(cfg) {

  var colors  = cfg.options.colors;

  return {
    properties: {
      'b' : 'border-color',
      'bx': [ 'border-left-color', 'border-right-color' ],
      'by': [ 'border-top-color', 'border-bottom-color' ],
      'bt': 'border-top-color',
      'br': 'border-right-color',
      'bb': 'border-bottom-color',
      'bl': 'border-left-color'
    },
    values: {
      't': 'transparent',
      ...colors
    }
  }

}

module.exports = borderColor;
