function textShadow(cfg) {

  var value  = '(?!0[^0-9.])[0-9.]+(?:cm|mm|in|px|pt|pc|em|ex|ch|rem|vw|vh|vmin|vmax)';
  var x      = `x\\(-?${value}\\)`;
  var y      = `y\\(-?${value}\\)`;
  var blur   = `${value}`;
  var color  = `${Object.keys(cfg.options.colors).join('|')}`;

  return {
    properties: {
      'ts': 'text-shadow'
    },
    values: {
      'no': 'none'
    },
    pattern: RegExp(`^(${x})(${y})(${blur})?(?:\\.(${color}))?$`)
  }

}

module.exports = textShadow;
