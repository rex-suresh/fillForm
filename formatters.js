exports.identity = (line) => line;
exports.formatToList = (items) => items.split(',');
exports.toString = (line) => line.toString();
exports.addToOld = (line, prevLine) => prevLine + '\n' + line;
