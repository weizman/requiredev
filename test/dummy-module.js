const ZERO = 0;
const ONE = 1;

var getOne = function() {
  return ONE;
};

// underscore indicates requiree private member
module.exports._Numbers = {};

module.exports._Numbers._ZERO = ZERO;
module.exports._Numbers.ONE = ONE;

module.exports.getOne = getOne;
