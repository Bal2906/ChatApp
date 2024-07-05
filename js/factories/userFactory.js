// js/factories/userFactory.js
import User from '../models/userModel.js';

class UserFactory {
  static createUser(uid, email, displayName) {
    return new User(uid, email, displayName);
  }
}

export default UserFactory;
