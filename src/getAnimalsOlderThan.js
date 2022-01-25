const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => data.species.find((name) => name.name === animal)
  .residents.every((ageAnimal) => ageAnimal.age >= age);

module.exports = getAnimalsOlderThan;

//Ajuda de Leonardo Diman