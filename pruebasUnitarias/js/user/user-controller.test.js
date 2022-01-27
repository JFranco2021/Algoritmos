const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

test('add user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    expect(userController.getUsers()).toContain(user);
  });

test('remove user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    userController.remove(user);
    expect(userController.users).not.toContain(user);
  });

  //Implement 1 test for the add function that verifies a user that is not in the users' list.

test('add user to userController', () => {    
  let user = new User(4321,"Salvador", "salvador@generation.org");
  userController.add(user);    
  expect(userController.getUsers()).toContain(user);
});

//Implement 1 test for the remove function that verifies a user that is not in the users' list.

test('remove user to userController', () => {    
  let user = new User(4321,"Salvador", "salvador@generation.org");
  userController.add(user);    
  userController.remove(user);
  expect(userController.users).not.toContain(user);
});

//Implement 2 unit tests for the findByEmail function.

test('test for the findByEmail function', () => {    
  let user = new User(4321,"Salvador", "salvador@generation.org");
  userController.findByEmail(user);    
  expect(userController.users).toContainEqual(user);
});

//Implement 2 unit tests for the findById function.

test('tests for the findById function', () => {    
  let user = new User(4321,"Salvador", "salvador@generation.org");
  userController.findById(user);    
  expect(userController.users).toContainEqual(user);
});