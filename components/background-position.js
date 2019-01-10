function backgroundPosition(cfg) {

  var position = '(?:0|-?[0-9.]+(?:cm|mm|in|px|pt|pc|em|ex|ch|rem|vw|vh|vmin|vmax|%))';

  var xpos = `x\\(${position}\\)`;
  var ypos = `y\\(${position}\\)`;
  var hpos = `(?:l|r)\\(${position}\\)`;
  var vpos = `(?:t|b)\\(${position}\\)`;

  return {
    properties: {
      'bg': 'background-position'
    },
    pattern: RegExp(`^(?:${xpos})?(?:${ypos})?$|^(?:${hpos})?(?:${vpos})?$`)
  }

}

module.exports = backgroundPosition;
