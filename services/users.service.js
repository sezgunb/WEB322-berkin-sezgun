const { models } = require("../db");

class UsersService {
  static async findAll() {
    return await models.User.findAll();
  }

  static async findById(id) {
    const user = await models.User.findByPk(id);
    return user;
  }

  static async create(user) {
    return await models.User.create(user);
  }

  static async update(user) {
    let savedUser = await models.User.findByPk(user.id);
    Object.assign(savedUser, user);
    await savedUser.save();
    return savedUser;
  }

  static async delete(id) {
    return await models.User.destroy({
      where: {
        id,
      },
    });
  }
}

module.exports = UsersService;
