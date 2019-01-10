function color(cfg) {

  var colors = cfg.options.colors;

  return {
    properties: {
      '' : 'color'
    },
    values: {
      't': 'transparent',
      ...colors
    }
  }

}

module.exports = color;
