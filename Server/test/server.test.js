const User = require('../models/user');

test('expects user inputs to be strings', () => {
  expect(User.userName).toBe(String)
})


