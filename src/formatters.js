const identity = (line) => line;
const formatToList = (items) => items.split(',');
const toString = (line) => line.toString();
const joinLines = (lines) => lines.join('\n');

module.exports = {identity, formatToList, toString, joinLines};
