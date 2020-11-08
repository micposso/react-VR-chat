const { addUser } = require('./users');

test('user is an object', () => {

  const user = { id: 5, name: "Memo", room: "Javascript" };

  expect(addUser(user)).toBe(Object);

})