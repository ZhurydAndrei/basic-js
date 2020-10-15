const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let result = []
  Array.isArray(members) === true ? (members.forEach(member => typeof member === 'string' ? result.push(member.trim().substr(0,1).toUpperCase()) : false))
  : false
  return result.sort().join('')
};
