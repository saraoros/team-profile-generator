const Engineer = require('../lib/Engineer.js');

jest.mock('../lib/Engineer');

test('creates a Engineer object', () => {
  const engineer = new Engineer('Olivia');
  expect(Engineer.name).toBe('Olivia');
});

test('creates an ID for Engineer', () => {
   expect(Engineer.id).toEqual(expect.any(Number)); 
});

test('creates an email for Engineer', () => {
   expect(Engineer.email).toContain('@'); 
});

test('creates GitHub link for Engineer', () => {
   expect(Engineer.github).anything(''); 
})
  
module.exports = Engineer;