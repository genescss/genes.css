function container(cfg) {

  var containers = cfg.options.containers;

  return {
    properties: {
      '': [ 'width', 'max-width', 'margin' ]
    },
    values: {
      'box' : [ '100%', containers.box , '0 auto' ],
      'wide': [ '100%', containers.wide, '0 auto' ],
      'full': [ '100%', containers.full, '0 auto' ]
    }
  }

}

module.exports = container;
