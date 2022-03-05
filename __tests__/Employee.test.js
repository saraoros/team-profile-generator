const Employee = require('../lib/Employee.js');
const employee = new Employee(`Sam`, `123`, `samemail@sample.com`);


test('creates an Employee object', () => {
  expect(employee.name).toBe(`Sam`);
  expect(employee.id).toBe(`123`);
  expect(employee.email).toBe(`samemail@sample.com`);
});

test('creates a name for the Employee', () => {
  expect(employee.getName()).toBe(`Sam`);
})

test('creates an ID for Employee', () => {
  expect(employee.getId()).toBe(`123`);
});

test('creates an email for Employee', () => {
  expect(employee.getEmail()).toBe('samemail@sample.com');
});

test (`creates a role for Employee`, () => {
  expect(employee.getRole()).toBe(`Employee`);
})

module.exports = Employee;
