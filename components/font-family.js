function fontFamily(cfg) {

  var fonts = cfg.options.fonts;

  return {
    properties: {
      '': 'font-family'
    },
    values: fonts
  }

}

module.exports = fontFamily;
