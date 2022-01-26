const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  return employees.find((employee) => employee.managers.includes(id)) !== undefined;
}

function getRelatedEmployees(managerId) {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  return employees.filter((employee) => employee.managers
    .includes(managerId))
    .map((nameEmployee) => `${nameEmployee.firstName} ${nameEmployee.lastName}`);
}

module.exports = { isManager, getRelatedEmployees };

//  1 - isManager - que será responsável por verificar se uma pessoa colaboradora é gerente ou não.
//  O retorno dessa função deve ser um booleano: true ou false;

// 2 - getRelatedEmployees - que utiliza a primeira função para apresentar as seguintes saídas:

//     se for uma pessoa colaboradora gerente, deve retornar um array contendo os nomes das pessoas
// colaboradoras que ela é responsável;
//     se não for uma pessoa colaboradora gerente, deverá ser lançado um erro gerado com a função
// construtora  da biblioteca padrão do JavaScript com a mensagem "O id inserido não é de uma pessoa colaboradora gerente!".
