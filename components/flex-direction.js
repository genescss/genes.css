function flexDirection(cfg) {

  return {
    properties: {
      'fx': 'flex-direction'
    },
    values: {
      'r' : 'row',
      'rr': 'row-reverse',
      'c' : 'column',
      'cr': 'column-reverse'
    }
  }

}

module.exports = flexDirection;
