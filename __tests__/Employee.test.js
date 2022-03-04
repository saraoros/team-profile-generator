const Employee = require('../lib/Employee.js');

jest.mock('../lib/Employee');

test('creates a Employee object', () => {
  const name = 'Sara';
  const employee = new Employee(name);
  expect(employee.name).toBe(name);
});

test('creates an ID for Employee', () => {
  const id = 1;
  const employee = new Employee('Trinh', id);
  expect(employee.id).toBe(id);
  //expect(Employee.id).toEqual(expect.any(Number));
});

test('creates an email for Employee', () => {
  expect(Employee.email).toContain('@');
});

module.exports = Employee;
