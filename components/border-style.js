function borderStyle(cfg) {

  return {
    properties: {
      'b' : 'border-style',
      'bx': [ 'border-left-style', 'border-right-style' ],
      'by': [ 'border-top-style', 'border-bottom-style' ],
      'bt': 'border-top-style',
      'br': 'border-right-style',
      'bb': 'border-bottom-style',
      'bl': 'border-left-style'
    },
    values: {
      's' : 'solid',
      'ds': 'dashed',
      'dt': 'dotted',
      'db': 'double',
      'g' : 'groove',
      'r' : 'ridge',
      'i' : 'inset',
      'o' : 'outset',
      'h' : 'hidden'
    }
  }

}

module.exports = borderStyle;
