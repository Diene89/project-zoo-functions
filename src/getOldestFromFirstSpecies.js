const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const employeeData = employees.find((employee) => employee.id === id);
  const firstSpecie = species.find((specie) => specie.id === employeeData.responsibleFor[0]);
  const oldSpecie = firstSpecie.residents.sort((specie1, specie2) => specie2.age - specie1.age);
  return Object.values(oldSpecie[0]);
}

module.exports = getOldestFromFirstSpecies;
