const Employee = require('../lib/Employee.js');

jest.mock('../lib/Employee');

test('creates a Employee object', () => {
  const employee = new Employee(' ');

  expect(Employee.name).toBe(' ');
});

test('creates an ID for Employee', () => {
    expect(Employee.id).toEqual(expect.any(Number));
})

test('creates an email for Employee', () => {
    expect(Employee.email).toContain('@');
})
 
  
module.exports = Employee;