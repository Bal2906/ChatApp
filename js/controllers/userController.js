// js/controllers/userController.js
import firebaseInstance from '../firebase/firebaseConfig.js';
import User from '../models/userModel.js';
import UserView from '../views/userView.js';

class UserController {
  constructor() {
    this.auth = firebaseInstance.auth;
    this.userView = new UserView();
    this.initListeners();
  }

  initListeners() {
    this.userView.registerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = this.userView.getRegisterData();
      this.registerUser(data.email, data.password);
    });

    this.userView.loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = this.userView.getLoginData();
      this.loginUser(data.email, data.password);
    });
  }

  registerUser(email, password) {
    this.auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(`User registered: ${user.email}`);
      })
      .catch((error) => {
        console.error(`Registration error: ${error.message}`);
      });
  }

  loginUser(email, password) {
    this.auth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(`User logged in: ${user.email}`);
      })
      .catch((error) => {
        console.error(`Login error: ${error.message}`);
      });
  }
}

export default UserController;
