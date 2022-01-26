const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// Com a ajuda do Pedro Fideles e Luiz Tharik
function countAnimals(animal) {
  if (!animal) {
    return species.reduce((acc, curr) => {
      const key = curr.name;
      const value = curr.residents.length;
      acc[key] = value;
      return acc;
    }, {});
  }
  const foundAnimal = species.find((specie) => specie.name === animal.specie);
  if (animal.sex) {
    return foundAnimal.residents.filter((resident) => resident.sex === animal.sex).length;
  }
  return foundAnimal.residents.length;
}

module.exports = countAnimals;
