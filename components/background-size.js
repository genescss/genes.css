function backgroundSize(cfg) {

  var size   = '(?!0[^0-9.])[0-9.]+(?:cm|mm|in|px|pt|pc|em|ex|ch|rem|vw|vh|vmin|vmax|%)';
  var width  = `w\\(${size}\\)`;
  var height = `h\\(${size}\\)`;

  return {
    properties: {
      'bg': 'background-size'
    },
    values: {
      'a'      : 'auto',
      'cover'  : 'cover',
      'contain': 'contain',
      '0'      : '0'
    },
    pattern: RegExp(`^(?:${width})?(?:${height})?$`)
  }

}

module.exports = backgroundSize;
