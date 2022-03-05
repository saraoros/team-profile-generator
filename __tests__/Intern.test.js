const Intern = require('../lib/Intern.js');
const intern = new Intern('John', `456`, `johnsemail@sample.com`, 'UCLA');
//jest.mock('../lib/Intern');

test('creates a Intern object', () => {
  expect(intern.name).toBe('John');
  expect(intern.id).toBe(`456`);
  expect(intern.email).toBe(`johnsemail@sample.com`);
  expect(intern.school).toBe(`UCLA`);
});

test(`creates a name for Intern`, () => {
   expect(intern.getName()).toBe('John');
})

test('creates an ID for Intern', () => {
   expect(intern.getId()).toBe(`456`);
});

test('creates an email for Intern', () => {
   expect(intern.getEmail()).toBe(`johnsemail@sample.com`); 
});

test('creates school name for Intern', () => {
   expect(intern.getSchool()).toBe('UCLA');
})

test('creates a role for Intern', () => {
   expect(intern.getRole()).toBe('Intern');
})
  
module.exports = Intern;