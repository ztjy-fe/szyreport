/**
 * @desc   合并json对象
 * @param  {Object} target
 * @return {Object} output
 */
var assign = function (target) {
	var output = Object(target);
	for (var index = 1; index < arguments.length; index++) {
		var source = arguments[index];
		if (source !== undefined && source !== null) {
			for (var nextKey in source) {
				if (source.hasOwnProperty(nextKey)) {
					output[nextKey] = source[nextKey];
				}
			}
		}
	}
	return output;
};

module.exports = assign;
