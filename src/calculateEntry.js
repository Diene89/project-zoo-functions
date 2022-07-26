const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countEntrants(array) {
  return array.reduce((acc, current) => {
    if (current.age < 18) {
      acc.child += 1;
    } else if (current.age >= 50) {
      acc.senior += 1;
    } else acc.adult += 1;
    return acc;
  }, { child: 0, adult: 0, senior: 0 });
}

function calculateEntry(array) {
  if (!array || Object.keys(array).length === 0) {
    return 0;
  }
  const entrantsByAge = countEntrants(array);
  let price = 0;
  price += entrantsByAge.child * prices.child;
  price += entrantsByAge.adult * prices.adult;
  price += entrantsByAge.senior * prices.senior;
  return price;
}

module.exports = { calculateEntry, countEntrants };

// Com ajuda da Sheila Nakashima, Thiago Zardo e André Felipe
