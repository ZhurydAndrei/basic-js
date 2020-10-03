module.exports = function countCats(backyard) {
  let result = backyard.reduce((acc, val) => val.concat(acc), [])
  .filter(elem => elem === '^^')
  return result.length 
};

