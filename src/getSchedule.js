const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// Requisito feito com ajuda da Isabela Nery

// Em parceria com Nikolas e Khyra

// Minion 2 - serve o minion 1 - retornando os animais de cada dia
const showAnimals = (day) => species.filter((availableAnimal) => availableAnimal.availability
  .some((element) => element === day)).map((item) => item.name);

// Minion 1 - retorna a agenda de todos os dias
function ifEmpty() {
  const days = Object.keys(data.hours);
  const hours = Object.values(data.hours);
  return days.reduce((acc, day, index) => {
    if (hours[index].open === 0) {
      acc[day] = {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
      };
    } else {
      acc[day] = {
        officeHour: `Open from ${hours[index].open}am until ${hours[index].close}pm`,
        exhibition: showAnimals(day),
      };
    }
    return acc;
  }, {});
}

// Minion 3 - responde para o GRU - verifica se o parametro é dia ou animal
function dayOrAnimal(scheduleTarget) {
  const day = Object.keys(data.hours);
  const specie = species.map((animal) => animal.name);
  const verify = [...day, ...specie];
  return verify.some((element) => element === scheduleTarget);
}

// Minion 4 - retorna a agenda de um dia específico usando as informações do minion 1
function today(scheduleTarget) {
  const obj = {};
  const fullSchedule = ifEmpty();
  obj[scheduleTarget] = fullSchedule[scheduleTarget];
  return obj;
}

// Minion 5 - retorna a agenda de cada animal
const animalDay = (scheduleTarget) => data.species
  .find((animal) => animal.name === scheduleTarget).availability;

// GRU :)
function getSchedule(scheduleTarget) {
  if (scheduleTarget === undefined) {
    return ifEmpty();
  }
  if (dayOrAnimal(scheduleTarget) === false) {
    return ifEmpty();
  }
  if (Object.keys(data.hours).some((element) => element === scheduleTarget)) {
    return today(scheduleTarget);
  }
  if (data.species.map((animal) => animal.name).some((item) => item === scheduleTarget)) {
    return animalDay(scheduleTarget);
  }
}

module.exports = getSchedule;
