function backgroundColor(cfg) {

  var colors = cfg.options.colors;

  return {
    properties: {
      'bg': 'background-color'
    },
    values: {
      't': 'transparent',
      ...colors
    }
  }

}

module.exports = backgroundColor;
