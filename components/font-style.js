function fontStyle(cfg) {

  var fonts = cfg.options.fonts;

  return {
    properties: {
      'f': 'font-style'
    },
    values: {
      'n': 'normal',
      'i': 'italic',
      'o': 'oblique'
    },
    pattern: /^-?(?!0[^0-9.])[0-9.]+deg$/
  }

}

module.exports = fontStyle;
