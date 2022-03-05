const Engineer = require('../lib/Engineer.js');
const engineer = new Engineer('Olivia', '1644' , `oliviasemail@sample.com`, 'oliviasHub' )
//jest.mock('../lib/Engineer');

test('creates a Engineer object', () => {
  expect(engineer.name).toBe('Olivia');
  expect(engineer.id).toBe('1644');
  expect(engineer.email).toBe(`oliviasemail@sample.com`);
  expect(engineer.github).toBe(`oliviasHub`);
});

test('creates an ID for Engineer', () => {
   expect(engineer.getId()).toBe('1644'); 
});

test('creates an email for Engineer', () => {
   expect(engineer.getEmail()).toBe(`oliviasemail@sample.com`); 
});

test('creates GitHub link for Engineer', () => {
   expect(engineer.getGithub()).toBe('oliviasHub'); 
})
  
test('creates role for Engineer', () => {
   expect(engineer.getRole()).toBe('Engineer');
})

module.exports = Engineer;