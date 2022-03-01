const Intern = require('../lib/Intern.js');

jest.mock('../lib/Intern');

test('creates a Intern object', () => {
  const intern = new Intern('Sam');
  expect(Intern.name).toBe('Sam');
});

test('creates an ID for Intern', () => {
   expect(Intern.id).toEqual(expect.any(Number)); 
});

test('creates an email for Intern', () => {
   expect(Intern.email).toContain('@'); 
});

test('creates school name for Intern', () => {
   expect(Intern.github).anything(''); 
})
  
module.exports = Intern;