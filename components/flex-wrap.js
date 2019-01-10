function flexWrap(cfg) {

  return {
    properties: {
      'fx': 'flex-wrap'
    },
    values: {
      'nw': 'nowrap',
      'w' : 'wrap',
      'wr': 'wrap-reverse'
    }
  }

}

module.exports = flexWrap;
