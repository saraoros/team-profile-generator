const Manager = require('../lib/Manager.js');

jest.mock('../lib/Manager');

test('creates a Manager object', () => {
  const manager = new Manager('Jovanny');

  expect(manager.name).toBe('Jovanny');
});

test('creates an ID for Manager', () => {
    expect(manager.id).toEqual(expect.any(Number));
})

test('creates an email address for Manager', () => {
   expect(manager.email).toContain('@'); 
})

 test('creates office number for Manager', () => {
    expect(manager.officeNumber).toEqual(expect.any(Number)); 
 })
  
module.exports = Manager;