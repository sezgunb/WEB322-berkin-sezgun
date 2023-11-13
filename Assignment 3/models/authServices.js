const usersService = require('./userServices'); // Assuming you have a userServices.js file

class AuthService {
  constructor(usersService) {
    this.usersService = usersService;
  }

  login(email, password) {
    const user = this.usersService.getUserByEmail(email);

    if (user && user.password === password) {
      return { isAuthenticated: true, user };
    } else {
      return { isAuthenticated: false, user: null };
    }
  }
}

const authService = new AuthService(usersService);

module.exports = authService;