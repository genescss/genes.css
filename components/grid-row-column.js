function gridRowColumn(cfg) {

  return {
    properties: {
      'row': 'grid-row',
      'col': 'grid-column'
    },
    values: {
      'a': 'auto'
    },
    pattern: /^(?:-?(?!0)[0-9.]+)?(?:to-?(?!0)[0-9.]+|go(?!0)[0-9.]+)?$/
  }
  
}

module.exports = gridRowColumn;
