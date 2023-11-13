let users = require("../data/fakeUsers.json");

class UserService {
  find() {
    return users;
  }

  findByID(id) {
    const user = users.find((user) => {
      return user.id === parseInt(id);
    });
    return user;
  }

  delete(id) {
    users = users.filter((user) => user.id !== id);
    return `User ${id} deleted`;
  }

  add(user) {
    user.id = users.length + 1;
    users.push(user);
    return user;
  }
}

const service = new UserService();

module.exports = service;