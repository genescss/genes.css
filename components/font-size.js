function fontSize(cfg) {

  var type = cfg.options.scales.type;

  return {
    properties: {
      'f': 'font-size'
    },
    values: {
      'xxs': 'xx-small',
      'xs' : 'x-small',
      's'  : 'small',
      'm'  : 'medium',
      'l'  : 'large',
      'xl' : 'x-large',
      'xxl': 'xx-large',
      'sr' : 'smaller',
      'lr' : 'larger',
      '0'  : '0',
      '1'  : type[1],
      '2'  : type[2],
      '3'  : type[3],
      '4'  : type[4],
      '5'  : type[5],
      '6'  : type[6],
      '7'  : type[7],
      '8'  : type[8],
      '9'  : type[9]
    },
    pattern: /^(?!0[^0-9.])[0-9.]+(?:cm|mm|in|px|pt|pc|em|ex|ch|rem|vw|vh|vmin|vmax|%)$/
  }

}

module.exports = fontSize;
