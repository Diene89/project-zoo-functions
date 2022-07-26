const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  if (employeeName === undefined) {
    return {};
  }
  return data.employees
    .find((name) => name.firstName === employeeName || name.lastName === employeeName);
};

module.exports = getEmployeeByName;

// 3. Implemente a função getEmployeeByName

// Esta função é responsável pela busca das pessoas colaboradoras através do primeiro ou do último nome delas

// O que será avaliado

//     Sem parâmetros, retorna um objeto vazio
//     Quando provido o primeiro nome do funcionário, retorna o objeto do funcionário
//     Quando provido o último nome do funcionário, retorna o objeto do funcionário
