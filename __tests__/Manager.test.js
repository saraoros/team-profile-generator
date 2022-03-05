const Manager = require('../lib/Manager.js');
const manager = new Manager('Jovanny', '1018', `jovannysemail@sample.com`, '789');
//jest.mock('../lib/Manager');

test('creates a Manager object', () => {
  expect(manager.name).toBe('Jovanny');
  expect(manager.id).toBe('1018');
  expect(manager.email).toBe(`jovannysemail@sample.com`);
  expect(manager.officeNumber).toBe('789');
});

test('creates a name for Manager', () => {
   expect(manager.getName()).toBe('Jovanny');
})

test('creates an ID for Manager', () => {
    expect(manager.getId()).toBe('1018');
})

test('creates an email address for Manager', () => {
   expect(manager.getEmail()).toBe(`jovannysemail@sample.com`);
})

 test('creates office number for Manager', () => {
    expect(manager.getOfficeNumber()).toBe('789');
 })
  
test('creates role for Manager', () => {
   expect(manager.getRole()).toBe('Manager');
})

module.exports = Manager;