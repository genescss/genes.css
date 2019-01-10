function textRendering(cfg) {

  return {
    properties: {
      'tr': 'text-rendering'
    },
    values: {
      'a' : 'auto',
      'ol': 'optimizeLegibility',
      'os': 'optimizeSpeed',
      'gp': 'geometricPrecision'
    }
  }

}

module.exports = textRendering;
